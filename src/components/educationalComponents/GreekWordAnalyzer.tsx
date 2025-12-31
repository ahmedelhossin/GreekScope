"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface WikiResult {
  pageid: number;
  title: string;
  snippet: string;
}

export default function GreekWikiSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<WikiResult[]>([]);
  const [loading, setLoading] = useState(false);

  const searchWiki = async (searchTerm?: string) => {
    const q = (searchTerm ?? query).trim();
    if (!q) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://ar.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(
          q + " اليونان"
        )}&format=json&origin=*`
      );
      const data = await res.json();
      localStorage.setItem("lastWikiQuery", q);
      setResults(data?.query?.search ?? []);
    } catch (err) {
      console.error("Error fetching Wikipedia:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const lastQuery = localStorage.getItem("lastWikiQuery");
    if (!lastQuery) return;

    setQuery(lastQuery);

    (async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://ar.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(
            lastQuery + " اليونان"
          )}&format=json&origin=*`
        );
        const data = await res.json();
        setResults(data?.query?.search ?? []);
      } catch (err) {
        console.error("Error fetching Wikipedia:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>ابحث في مواضيع يونانية بالعربي</h2>

      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="اكتب موضوعًا هنا..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchWiki()}
          style={{ flex: 1, padding: "0.5rem 1rem", fontSize: "1rem", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button
          id="search-now"
          onClick={() => searchWiki()}
          className="px-4 py-2 rounded bg-blue-600 text-white border-none cursor-pointer active:bg-blue-700 md:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          aria-busy={loading}   // Indicates to screen readers that the button is busy
          disabled={loading}     // Prevents repeated clicks while loading
        >
          {loading ? "جاري البحث..." : "بحث"}
        </button>


      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
        {results.map((item) => (
          <Link
            key={item.pageid}
            href={`https://ar.wikipedia.org/?curid=${item.pageid}`}
            target="_blank"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={{ padding: "1rem", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", backgroundColor: "#fafafa" }}>
              <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.2rem", color: "#0070f3" }}>{item.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: item.snippet }} style={{ margin: 0, color: "#333" }} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
