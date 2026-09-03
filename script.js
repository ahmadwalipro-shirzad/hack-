/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* =========================
   LAB SYSTEM
========================= */

const labContent = document.getElementById("labContent");


function openLab(type) {

    if (type === "password") {

        labContent.innerHTML = `

            <h2 class="lab-title">
                🔑 Password Analyzer
            </h2>

            <p class="lab-description">
                Enter a password and check its basic strength.
                The password is analyzed locally in your browser.
            </p>

            <input
                type="password"
                id="passwordInput"
                class="lab-input"
                placeholder="Enter a password..."
            >

            <button
                class="lab-action"
                onclick="analyzePassword()">
                Analyze Password
            </button>

            <div id="passwordResult" class="result">
                Waiting for password...
            </div>

            <div class="password-bar">
                <div
                    id="passwordFill"
                    class="password-fill">
                </div>
            </div>

        `;
    }


    if (type === "login") {

        labContent.innerHTML = `

            <h2 class="lab-title">
                🔐 Login Security Lab
            </h2>

            <p class="lab-description">
                Educational authentication simulation.
                Correct credentials are intentionally simple.
            </p>

            <input
                type="text"
                id="username"
                class="lab-input"
                placeholder="Username"
            >

            <input
                type="password"
                id="loginPassword"
                class="lab-input"
                placeholder="Password"
            >

            <button
                class="lab-action"
                onclick="loginTest()">
                Login
            </button>

            <div
                id="loginResult"
                class="result">
                Waiting for login...
            </div>

        `;
    }


    if (type === "xss") {

        labContent.innerHTML = `

            <h2 class="lab-title">
                🧪 XSS Safe Demo
            </h2>

            <p class="lab-description">
                This demonstration shows how user input can be
                safely displayed as text instead of executing HTML.
            </p>

            <input
                type="text"
                id="xssInput"
                class="lab-input"
                placeholder="Enter some text..."
            >

            <button
                class="lab-action"
                onclick="safeXSSDemo()">
                Test Input
            </button>

            <div
                id="xssResult"
                class="result">
                Result will appear here...
            </div>

        `;
    }


    if (type === "score") {

        labContent.innerHTML = `

            <h2 class="lab-title">
                📊 Security Score
            </h2>

            <p class="lab-description">
                Run a basic local security checklist.
            </p>

            <button
                class="lab-action"
                onclick="calculateScore()">
                Run Security Check
            </button>

            <div
                id="scoreResult"
                class="result">
                No scan performed yet.
            </div>

        `;
    }

}


/* =========================
   PASSWORD ANALYZER
========================= */

function analyzePassword() {

    const password =
        document.getElementById("passwordInput").value;

    const result =
        document.getElementById("passwordResult");

    const fill =
        document.getElementById("passwordFill");


    let score = 0;


    if (password.length >= 8) {
        score++;
    }

    if (password.length >= 12) {
        score++;
    }

    if (/[A-Z]/.test(password)) {
        score++;
    }

    if (/[a-z]/.test(password)) {
        score++;
    }

    if (/[0-9]/.test(password)) {
        score++;
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    }


    let message = "";


    if (password.length === 0) {

        message = "Please enter a password.";

        fill.style.width = "0%";

    }

    else if (score <= 2) {

        message =
            "Weak password — add length, numbers and symbols.";

        fill.style.width = "30%";

    }

    else if (score <= 4) {

        message =
            "Medium password — you can make it stronger.";

        fill.style.width = "65%";

    }

    else {

        message =
            "Strong password — good basic password structure.";

        fill.style.width = "100%";

    }


    result.innerHTML = `
        <strong>${message}</strong>
        <br>
        Score: ${score}/6
    `;

}


/* =========================
   LOGIN TEST
========================= */

function loginTest() {

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("loginPassword").value;

    const result =
        document.getElementById("loginResult");


    /*
        Educational credentials.
        This is NOT a real authentication system.
    */

    if (
        username === "shirzad" &&
        password === "CyberLab123!"
    ) {

        result.innerHTML = `
            <span class="success">
                ✓ Login successful!
                Welcome, Shirzad.
            </span>
        `;

    }

    else {

        result.innerHTML = `
            ❌ Login failed.
            <br>
            Try the educational credentials:
            <br>
            <b>shirzad</b> /
            <b>CyberLab123!</b>
        `;

    }

}


/* =========================
   SAFE XSS DEMO
========================= */

function safeXSSDemo() {

    const input =
        document.getElementById("xssInput").value;

    const result =
        document.getElementById("xssResult");


    /*
        textContent is intentionally used
        instead of innerHTML.

        This safely displays user input
        as text.
    */

    result.textContent =
        "Safe output: " + input;

}


/* =========================
   SECURITY SCORE
========================= */

function calculateScore() {

    const result =
        document.getElementById("scoreResult");


    let score = 0;

    let checks = [];


    /* HTTPS check */

    if (location.protocol === "https:") {

        score += 25;

        checks.push("✓ HTTPS detected");

    }

    else {

        checks.push(
            "⚠ Running without HTTPS"
        );

    }


    /* Local environment */

    if (
        location.hostname === "localhost" ||
        location.hostname === "127.0.0.1" ||
        location.hostname === ""
    ) {

        score += 25;

        checks.push(
            "✓ Local practice environment"
        );

    }

    else {

        score += 10;

        checks.push(
            "✓ Website environment detected"
        );

    }


    /* Browser */

    if (navigator.cookieEnabled) {

        score += 25;

        checks.push(
            "✓ Browser cookies available"
        );

    }


    /* Secure browser context */

    if (window.isSecureContext) {

        score += 25;

        checks.push(
            "✓ Secure browser context"
        );

    }

    else {

        checks.push(
            "⚠ Browser context is not secure"
        );

    }


    result.innerHTML = `

        <h3>
            Security Score: ${score}/100
        </h3>

        <br>

        ${checks.join("<br>")}

    `;

}


/* =========================
   TERMINAL
========================= */

const terminalInput =
    document.getElementById("terminalInput");

const terminalOutput =
    document.getElementById("terminalOutput");


terminalInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key !== "Enter") {
            return;
        }


        const command =
            terminalInput.value
            .trim()
            .toLowerCase();


        if (!command) {
            return;
        }


        terminalOutput.innerHTML += `
            <p>
                <span class="green">$</span>
                ${escapeHTML(command)}
            </p>
        `;


        let response = "";


        switch (command) {

            case "help":

                response = `
                    Available commands:<br>
                    help - Show commands<br>
                    clear - Clear terminal<br>
                    whoami - Show current user<br>
                    status - Show lab status<br>
                    about - About Shirzad CyberLab<br>
                    date - Show current date
                `;

                break;


            case "whoami":

                response =
                    "User: Shirzad";

                break;


            case "status":

                response =
                    "CyberLab Status: ONLINE";

                break;


            case "about":

                response =
                    "Shirzad CyberLab - Ethical Hacking Learning Lab";

                break;


            case "date":

                response =
                    new Date().toLocaleString();

                break;


            case "clear":

                terminalOutput.innerHTML = "";

                terminalInput.value = "";

                return;


            default:

                response =
                    "Command not found. Type 'help'.";

        }


        terminalOutput.innerHTML += `
            <p class="success">
                ${response}
            </p>
        `;


        terminalInput.value = "";

        terminalOutput.scrollTop =
            terminalOutput.scrollHeight;

    }
);


/* =========================
   HTML ESCAPE
========================= */

function escapeHTML(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}