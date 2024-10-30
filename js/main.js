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

//creo una funzione in cui genero le card dei membri del team partendo dall'html
const generateMemberCard = (name, role, email, img) => {
	return `
        <div class="col">
            <div class="card text-bg-dark h-100">
                <div class="row g-0 h-100">
                    <div class="col h-100">
                        <img
                            src="./assets/${img}"
                            class="img-fluid h-100 rounded-start"
                            alt="${name} + ${role}"
                        />
                    </div>
                    <div class="col h-100">
                        <div class="p-2 h-100 ">
                            <h5 class="card-title text-uppercase mt-3">${name}</h5>
                            <p class="card-text">${role}</p>
                            <p class="card-text fs-6 text-primary">
                                ${email}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
};

//creo una funzione per stampare le card per ogni membro del team nell'html
const printMemberCards = (container, members) => {
	let cardsHtml = ``;
	members.forEach((member) => {
		const { name, role, email, img } = member;
		const memberCard = generateMemberCard(name, role, email, img);
		cardsHtml += memberCard;
	});

	//e aggiugno le card all'html
	container.innerHTML = cardsHtml;
};

//recupero il gruppo di card e invoco la funzione
const teamCardsGroup = document.getElementById("teamCardsGroup");
printMemberCards(teamCardsGroup, teamMembers);

//creo la card per un nuovo membro da aggiungere:
//recupero i valori che inserisce l'utente e il bottone
//e creo delle costanti con i valori
const addNewMemberButton = document.getElementById("addNewMemberButton");
const newMemberName = document.getElementById("name");
const newMemberRole = document.getElementById("role");
const newMemberEmail = document.getElementById("email");
const newMemberImg = document.getElementById("img");

//al click del bottone
addNewMemberButton.addEventListener("click", () => {
	//inserisco i valori dell'utente nelle proprietà dell'oggetto member
	const name = newMemberName.value;
	const role = newMemberRole.value;
	const email = newMemberEmail.value;
	const img = newMemberImg.value;

	const newMember = { name, role, email, img };
	//aggiungo a teamMembers il nuovo membro
	teamMembers.push(newMember);

	//genero la card del nuovo membro del team
	const newMemberCard = generateMemberCard(name, role, email, img);
	//stampo la card del nuovo membro del team
	//invocando la funzione per stampare nell'html la card
	printMemberCards(teamCardsGroup, teamMembers);
});
