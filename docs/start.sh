tsc main.ts > /dev/null 2>&1
echo 'Compiling TS'
sass style.scss style.css > /dev/null 2>&1
echo 'Compiling SCSS'
echo 'Running Web Server'
echo 'http://localhost:8888'
python3 -m http.server 8888

