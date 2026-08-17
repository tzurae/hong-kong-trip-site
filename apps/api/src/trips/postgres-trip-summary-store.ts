import { sql, type Kysely } from "kysely";

import type { AlongTheWayDatabase } from "../database/database";
import type { TripSummary, TripSummaryStore } from "./trip-summary-store";

export class PostgresTripSummaryStore implements TripSummaryStore {
  constructor(private readonly database: Kysely<AlongTheWayDatabase>) {}

  async isReady() {
    await sql`select 1`.execute(this.database);
    return true;
  }

  async findBySlug(slug: string): Promise<TripSummary | undefined> {
    const row = await this.database
      .selectFrom("trip_summaries")
      .select([
        "slug",
        "title",
        "destination",
        "start_date as startDate",
        "end_date as endDate",
        "traveler_count as travelerCount",
        "day_count as dayCount",
        "next_decision as nextDecision",
        "updated_at as updatedAt",
      ])
      .where("slug", "=", slug)
      .executeTakeFirst();

    if (!row) {
      return undefined;
    }

    return {
      ...row,
      updatedAt:
        row.updatedAt instanceof Date
          ? row.updatedAt.toISOString()
          : new Date(row.updatedAt).toISOString(),
    };
  }
}
