const blueColor = "linear-gradient(#78acb2, #98c7cd)";
const redColor = "linear-gradient(#f12626, #fb2a96)";
const greenColor = "linear-gradient(#65f186,#7afc56)";
const content = [
	{
		src: "./images/bg_1.png",
		id: 1,
		color: blueColor
	},
	{
		src: "./images/bg_2.png",
		id: 2,
		color: redColor
	},
	{
		src: "./images/bg_3.png",
		id: 3,
		color: greenColor
	}
];
window.onload = () => {
	const prev = getElement("#container3 .prev");
	const on = getElement("#container3 .on");
	const next = getElement("#container3 .next");
	let currentId = 1;
	currentId = goToSlide(currentId, prev, on, next);

	/* slider */
	prev.onclick = () => {
		currentId = goToSlide(currentId - 1, prev, on, next);
	};
	next.onclick = () => {
		currentId = goToSlide(currentId + 1, prev, on, next);
	};
};
function goToSlide(id, prev, on, next) {
	/* text 설정 */
	if (id < 1 || id > content.length) return;
	const emptyStr = "";
	prev.innerText = id - 1 < 1 ? emptyStr : id - 1;
	on.innerText = id;
	next.innerText = id + 1 > content.length ? emptyStr : id + 1;
	changeImage(id);
	return id;
}
function changeImage(id) {
	const selected = content.filter(item => item.id === id)[0];
	const circle = getElement(".circle");
	const img = getElement("#container2 img");
	fade(circle, 50);
	fade(img, 50);
	circle.style.background = selected.color;
	img.setAttribute("src", selected.src);
}
function getElement(selector) {
	const result = document.querySelectorAll(selector);
	if (result.length === 0) return null;
	else return result.length === 1 ? result[0] : result;
}
function fade(element, time) {
	let opacity = 0;
	element.style.opacity = opacity;
	const timer = setInterval(() => {
		if (opacity > 1) {
			clearInterval(timer);
		}
		opacity += 0.1;
		element.style.opacity = opacity;
	}, time);
}
