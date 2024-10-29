const teamMembers = [
	{
		name: "Marco Bianchi",
		role: "Designer",
		email: "marcobianchi@team.com",
		img: "img/male1.png",
	},
	{
		name: "Laura Rossi",
		role: "Front-end Developer",
		email: "laurarossi@team.com",
		img: "img/female1.png",
	},
	{
		name: "Giorgio Verdi",
		role: "Back-end Developer",
		email: "giorgioverdi@team.com",
		img: "img/male2.png",
	},
	{
		name: "Marta Ipsum",
		role: "SEO Specialist",
		email: "martarossi@team.com",
		img: "img/female2.png",
	},
	{
		name: "Roberto Lorem",
		role: "SEO Specialist",
		email: "robertolorem@team.com",
		img: "img/male3.png",
	},
	{
		name: "Daniela Amet",
		role: "Analyst",
		email: "danielaamet@team.com",
		img: "img/female3.png",
	},
];

const teamCardsGroup = document.getElementById("teamCardsGroup");
let cardsHtml = ``;

teamMembers.forEach((member) => {
	const memberCard = `
        <div class="col">
            <div class="card text-bg-dark h-100">
                <div class="row g-0 h-100">
                    <div class="col col-md-4">
                        <img
                            src="./assets/${member.img}"
                            class="img-fluid rounded-start"
                            alt="${member.name} + ${member.role}"
                        />
                    </div>
                    <div class="col col-md-8 h-100">
                        <div class="p-2">
                            <h5 class="card-title text-uppercase">${member.name}</h5>
                            <p class="card-text">${member.role}</p>
                            <p class="card-text fs-6 text-primary">
                                ${member.email}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
	cardsHtml += memberCard;
});

teamCardsGroup.innerHTML = cardsHtml;

//aggiungo la card per un nuovo membro
const addNewMember = document.getElementById("addNewMember");
const newMemberName = document.getElementById("name");
const newMemberRole = document.getElementById("role");
const newMemberEmail = document.getElementById("email");
const newMemberImg = document.getElementById("img");

addNewMember.addEventListener("click", () => {
	const name = newMemberName.value;
	const role = newMemberRole.value;
	const email = newMemberEmail.value;
	const img = newMemberImg.value;

	const newMember = { name, role, email, img };
	teamMembers.push(newMember);

	teamCardsGroup.innerHTML += newMember;
});
