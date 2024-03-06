const getUser = () => {
	return;
};

function getCurrentDateTime() {
	let currentDate = new Date();
	let day = currentDate.getDate();
	let month = currentDate.getMonth() + 1;
	let year = currentDate.getFullYear();

	let hours = currentDate.getHours();
	let minutes = currentDate.getMinutes();
	let seconds = currentDate.getSeconds();

	day = day < 10 ? "0" + day : day;
	month = month < 10 ? "0" + month : month;
	hours = hours < 10 ? "0" + hours : hours;
	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;

	let formattedDateTime = `${day}/${month}/${year}-${hours}:${minutes}:${seconds}`;

	return formattedDateTime;
}

module.exports = { getUser, getCurrentDateTime };
