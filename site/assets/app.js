// 구글 드라이브 공유 링크(https://drive.google.com/file/d/파일ID/view...)를
// "보기용 링크"와 "다운로드용 링크"로 변환한다.
// pdfs 폴더의 로컬 파일 경로를 그대로 써도 동작한다 (기존 방식과 혼용 가능).
function resolvePdfLinks(value) {
  if (!value.startsWith("http")) {
    return { view: value, download: value };
  }
  const match = value.match(/\/d\/([a-zA-Z0-9_-]+)/);
  const id = match ? match[1] : null;
  if (!id) {
    return { view: value, download: value };
  }
  return {
    view: `https://drive.google.com/file/d/${id}/view`,
    download: `https://drive.google.com/uc?export=download&id=${id}`,
  };
}

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return {
    day: `${mm}.${dd}`,
    full: `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 (${weekdays[d.getDay()]})`,
  };
}

function renderPosts() {
  const root = document.getElementById("archive-root");
  const sorted = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

  if (sorted.length === 0) {
    root.innerHTML = `<div class="empty">아직 등록된 브리핑이 없습니다.</div>`;
    return;
  }

  let lastMonth = null;
  const pieces = [];

  sorted.forEach((post) => {
    const d = formatDate(post.date);
    const links = resolvePdfLinks(post.pdf);
    const monthKey = post.date.slice(0, 7);

    if (monthKey !== lastMonth) {
      lastMonth = monthKey;
      const [y, m] = monthKey.split("-");
      pieces.push(`
        <div class="month-divider">
          <div class="node"></div>
          ${y}년 ${Number(m)}월
        </div>
      `);
    }

    pieces.push(`
        <article class="entry">
          <div class="datecol">
            <span class="day">${d.day}</span>
            ${post.date.slice(0, 4)}
          </div>
          <div class="node"></div>
          <div class="card">
            ${post.thumb ? `<img class="thumb" src="${post.thumb}" alt="" loading="lazy" />` : ""}
            <div class="card-body">
              <h2><a href="${links.view}" target="_blank" rel="noopener">${post.title}</a></h2>
              ${post.subtitle ? `<p class="subtitle">${post.subtitle}</p>` : ""}
              <p class="summary">${post.summary}</p>
              <div class="tags">
                ${post.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
              </div>
              <div class="actions">
                <a class="btn primary" href="${links.view}" target="_blank" rel="noopener">PDF로 읽기 ↗</a>
                <a class="btn ghost" href="${links.download}" target="_blank" rel="noopener">다운로드</a>
              </div>
            </div>
          </div>
        </article>`);
  });

  root.innerHTML = `<div class="thread"></div>${pieces.join("")}`;
}

document.addEventListener("DOMContentLoaded", renderPosts);
