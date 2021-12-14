const body = document.querySelector("body");
const input = document.querySelector("input");
const login_box = document.querySelector(".login_box");
const login_header = document.querySelector(".login_header");
const login_content = document.querySelector(".login_content");
const login_footer = document.querySelector(".login_footer");
const input_button = document.querySelector("#input_button");
const login_dark = document.querySelector(".login_dark");

login_dark.addEventListener("click", () => {
	login_dark.classList.toggle("darkmode");

	if(login_dark.classList.contains("darkmode")) {
		body.style = 'background-color: #222224';
		input.style = 'border: none';
		input_button.style = 'background-color: #222224';
		login_box.style = 'background-color: #243247; opacity: 1';
		login_header.style = 'color: #ededed';
		login_dark.style= 'color: #ededed';
	} else {
		body.style = 'background-color: #90cdd6';
		input.style = 'border: 1px solid #000';
		input_button.style = 'background-color:  #90cdd6';
		login_box.style = 'background-color: #fff';
		login_header.style = 'color: #222224';
		login_dark.style= 'color: #222224';
	}
});