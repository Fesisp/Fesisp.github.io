/* matrix-bg.js
  Background effects:
  - Left: console-style typing feed (organized left column, flows until page end)
  - Full-screen: matrix rain effect
  Auto-initializes when loaded. Creates <canvas id="matrix-bg"> if missing.
*/
(function(){
  const commands = [
    '$ npm install', '$ git commit -m "update"', '$ python app.py', '$ docker build -t app .',
    '$ pip install pandas', '$ node server.js', '$ cargo run', '$ flutter run', '$ yarn start',
    '$ pytest tests/', '$ go build main.go', '$ jupyter notebook', '$ terraform apply', '$ kubectl apply -f',
    '$ psql -U postgres', '$ redis-cli', '$ mongosh', '> SELECT * FROM users', '> INSERT INTO data',
    '$ az login', '$ gcloud init', '$ aws s3 ls', '[INFO] Build success', '[ERROR] Connection timeout',
    'Compiling...', 'Running tests...', '✓ All tests passed', '200 OK - Server running'
  ];

  function ensureCanvas(){
    let c = document.getElementById('matrix-bg');
    if(!c){
      c = document.createElement('canvas');
      c.id = 'matrix-bg';
      c.setAttribute('aria-hidden','true');
      document.body.insertBefore(c, document.body.firstChild);
    }
    // style to cover whole document
    Object.assign(c.style,{
      position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', minHeight: '100vh',
      zIndex: '0', pointerEvents: 'none', opacity: '0.32'
    });
    return c;
  }

  function init(){
    const canvas = ensureCanvas();
    const ctx = canvas.getContext('2d');
    let w=0,h=0, DPR = Math.max(1, window.devicePixelRatio || 1);

    // Console (left)
    const lineHeight = 20;
    const leftPadding = 14;
    let consoleLines = [];
    let maxConsoleLines = 0;

    // Matrix (full-screen)
    const matrix = {cols: [], fontSize: 14, columns:0};

    function resize(){
      w = window.innerWidth;
      h = Math.max(window.innerHeight, document.documentElement.scrollHeight);
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(DPR,0,0,DPR,0,0);

      maxConsoleLines = Math.ceil(h / lineHeight) + 8;

      // matrix font size responsive to viewport
  // smaller fontSize -> more columns for a denser, steadier effect
  matrix.fontSize = Math.max(9, Math.floor(Math.min(16, w / 60)));
  matrix.columns = Math.floor(w / matrix.fontSize);
  // more consistent speeds for a calmer, continuous rain
  matrix.cols = new Array(matrix.columns).fill(0).map(()=>({y: Math.random()*h, speed: 1.2 + Math.random()*1.6}));
    }

    function addConsoleLine(){
      if(consoleLines.length >= maxConsoleLines) consoleLines.shift();
      const txt = commands[Math.floor(Math.random()*commands.length)];
      consoleLines.push({
        text: txt,
        x: leftPadding,
        y: consoleLines.length * lineHeight + 20,
        opacity: 0.78 + Math.random()*0.2,
        chars: 0,
        complete: false
      });
    }

    function drawConsoleArea(){
      // determine console width responsive: aligned with site container approx
      const containerMax = 1100; // matches .container in CSS
      const desired = Math.min(Math.max(200, Math.floor(w * 0.20)), 340);
      let consoleWidth = desired;
      // on small screens shrink or hide
      if(w < 700) consoleWidth = Math.max(120, Math.floor(w * 0.28));

      // clip left area
      ctx.save();
      ctx.beginPath(); ctx.rect(0,0, consoleWidth, h); ctx.clip();

      // background subtle gradient behind console to 'enquadrar' with site
      const g = ctx.createLinearGradient(0,0,consoleWidth,0);
      g.addColorStop(0,'rgba(0,0,0,0.18)');
      g.addColorStop(1,'rgba(0,0,0,0.04)');
      ctx.fillStyle = g; ctx.fillRect(0,0,consoleWidth,h);

      ctx.font = '13px "Courier New", monospace';
      ctx.textBaseline = 'top';
      for(let idx=0; idx<consoleLines.length; idx++){
        const line = consoleLines[idx];
        if(!line.complete){ line.chars += 0.5; if(line.chars >= line.text.length) line.complete = true; }
        const display = line.text.substring(0, Math.floor(line.chars));
        const yPos = (idx * lineHeight) + 16;
        const baseOpacity = line.opacity * (1 - idx / Math.max(1, maxConsoleLines) * 0.6);
        ctx.fillStyle = `rgba(0,255,65,${baseOpacity})`;
        ctx.fillText(display, line.x, yPos);
        if(!line.complete && Math.floor(Date.now()/500)%2===0){
          ctx.fillText('_', line.x + ctx.measureText(display).width, yPos);
        }
      }

      ctx.restore();
    }

    function drawMatrixFull(){
      ctx.font = matrix.fontSize + 'px monospace';
      const rightThreshold = Math.floor(w * 0.62);
      for(let i=0;i<matrix.columns;i++){
        const col = matrix.cols[i];
        const x = i * matrix.fontSize;
        const char = String.fromCharCode(0x30A0 + Math.random()*96);
        // increase intensity a little on the right side for visual balance
        const intensity = x > rightThreshold ? 1.45 : 1.0;
        const tailAlpha = Math.min(0.12, 0.06 * intensity);
        const headAlpha = Math.min(0.5, 0.28 * intensity);
        // tail (subtle)
        ctx.fillStyle = `rgba(0,200,70,${tailAlpha})`;
        ctx.fillText(char, x, col.y);
        // head (slightly brighter but still subtle)
        ctx.fillStyle = `rgba(180,255,180,${headAlpha})`;
        ctx.fillText(char, x, col.y - matrix.fontSize);
        col.y += col.speed;
        if(col.y > h + Math.random()*1000) col.y = -Math.random()*200;
      }
    }

    function frame(){
  // subtle fade to create trails but low enough to keep the rain more constant
  ctx.fillStyle = 'rgba(0,0,0,0.035)';
  ctx.fillRect(0,0,w,h);

  // matrix across entire screen
  drawMatrixFull();

      // console left overlay
      drawConsoleArea();

      requestAnimationFrame(frame);
    }

    resize();
    // seed console
    for(let k=0;k<6;k++) addConsoleLine();
    setInterval(addConsoleLine, 900 + Math.random()*1200);
    window.addEventListener('resize', resize);
    requestAnimationFrame(frame);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
