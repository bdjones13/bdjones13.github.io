// ─── Hero Wireframe Mesh ───────────────────────────────────
(function () {
  var container = document.getElementById('hero-mesh');
  if (!container) return;

  var W = 1200, H = 400, cols = 14, rows = 8;
  var pts = [];

  for (var r = 0; r <= rows; r++) {
    for (var c = 0; c <= cols; c++) {
      pts.push([
        (c / cols) * W + Math.sin(r * 2.3 + c * 0.7) * 18,
        (r / rows) * H + Math.cos(c * 1.8 + r * 1.1) * 14
      ]);
    }
  }

  var lines = [];
  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < cols; c++) {
      var i = r * (cols + 1) + c;
      var j = i + 1, k = i + cols + 1, l = k + 1;
      lines.push([i, j], [i, k], [j, l]);
      if (c === cols - 1) lines.push([j, l]);
      if (r === rows - 1) lines.push([k, l]);
      lines.push([i, l]);
    }
  }

  var ns = 'http://www.w3.org/2000/svg';
  var svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
  svg.setAttribute('aria-hidden', 'true');
  svg.style.cssText = 'width:100%;height:100%;position:absolute;top:0;left:0;';

  lines.forEach(function (seg, i) {
    var line = document.createElementNS(ns, 'line');
    line.setAttribute('x1', pts[seg[0]][0]);
    line.setAttribute('y1', pts[seg[0]][1]);
    line.setAttribute('x2', pts[seg[1]][0]);
    line.setAttribute('y2', pts[seg[1]][1]);
    line.setAttribute('stroke',
      i % 11 === 0 ? 'rgba(215,93,215,0.4)' :
      i % 7  === 0 ? 'rgba(217,242,208,0.25)' :
                     'rgba(255,255,255,0.08)'
    );
    line.setAttribute('stroke-width', i % 11 === 0 ? '1.2' : '0.5');
    svg.appendChild(line);
  });

  pts.forEach(function (pt, i) {
    if (i % 3 !== 0) return;
    var circle = document.createElementNS(ns, 'circle');
    circle.setAttribute('cx', pt[0]);
    circle.setAttribute('cy', pt[1]);
    circle.setAttribute('r', '1');
    circle.setAttribute('fill', 'rgba(255,255,255,0.15)');
    svg.appendChild(circle);
  });

  container.appendChild(svg);
})();

// ─── Paper Accordion ───────────────────────────────────────
document.querySelectorAll('.paper-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var card = this.closest('.paper-card');
    var wasOpen = card.classList.contains('is-open');
    document.querySelectorAll('.paper-card.is-open').forEach(function (c) {
      c.classList.remove('is-open');
    });
    if (!wasOpen) card.classList.add('is-open');
  });
});

// ─── Bold "B. Jones" in author lines ──────────────────────
document.querySelectorAll('.paper-authors').forEach(function (el) {
  el.innerHTML = el.textContent
    .replace(/\bBenjamin Jones\b/g, '<strong>Benjamin Jones</strong>')
    .replace(/\bB\. Jones\b/g, '<strong>B. Jones</strong>');
});
