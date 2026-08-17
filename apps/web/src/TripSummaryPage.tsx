import { useCallback, useEffect, useState } from "react";

import {
  parseTripSummaryResponse,
  type TripSummaryDto,
} from "@along-the-way/contracts/trip-summary";

type PageState =
  | { status: "loading" }
  | { status: "loaded"; trip: TripSummaryDto }
  | { status: "error" };

interface TripSummaryPageProps {
  slug: string;
}

function displayDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);

  if (!year || !month || !day) {
    return value;
  }

  return `${year}/${month}/${day}`;
}

export function TripSummaryPage({ slug }: TripSummaryPageProps) {
  const [state, setState] = useState<PageState>({ status: "loading" });
  const [attempt, setAttempt] = useState(0);

  const retry = useCallback(() => setAttempt((value) => value + 1), []);

  useEffect(() => {
    const abortController = new AbortController();
    setState({ status: "loading" });

    void fetch(`/api/trips/${encodeURIComponent(slug)}/summary`, {
      headers: { Accept: "application/json" },
      signal: abortController.signal,
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Trip request failed with ${response.status}`);
        }

        return parseTripSummaryResponse(await response.json());
      })
      .then(({ trip }) => setState({ status: "loaded", trip }))
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
        setState({ status: "error" });
      });

    return () => abortController.abort();
  }, [attempt, slug]);

  if (state.status === "loading") {
    return (
      <main className="trip-shell trip-shell--centered">
        <p className="loading-message" role="status">
          正在整理旅程，讓你們一眼看懂下一步…
        </p>
      </main>
    );
  }

  if (state.status === "error") {
    return (
      <main className="trip-shell trip-shell--centered">
        <section className="error-card" role="alert">
          <p className="eyebrow">連線走散了一下</p>
          <h1>暫時拿不到旅程資料</h1>
          <p>已經排好的內容不會消失，等服務恢復後再接著走。</p>
          <button type="button" onClick={retry}>
            再試一次
          </button>
        </section>
      </main>
    );
  }

  const { trip } = state;

  return (
    <main className="trip-shell">
      <header className="brand-bar">
        <span className="brand-mark" aria-hidden="true">
          ↗
        </span>
        <span>ALONG THE WAY</span>
        <span className="sync-state">已同步</span>
      </header>

      <section className="summary-card" aria-labelledby="trip-title">
        <p className="eyebrow">你們正在一起完成的旅程</p>
        <h1 id="trip-title">{trip.title}</h1>
        <p className="destination">{trip.destination}</p>

        <dl className="trip-facts">
          <div>
            <dt>日期</dt>
            <dd>
              {displayDate(trip.startDate)}－{displayDate(trip.endDate)}
            </dd>
          </div>
          <div>
            <dt>同行</dt>
            <dd>
              {trip.travelerCount} 位旅伴・{trip.dayCount} 天
            </dd>
          </div>
        </dl>

        {trip.nextDecision ? (
          <aside className="next-decision">
            <span>下一個一起決定</span>
            <strong>{trip.nextDecision}</strong>
          </aside>
        ) : null}
      </section>
    </main>
  );
}
