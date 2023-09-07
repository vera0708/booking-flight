import getFormPerson from "./modules/formPerson.js";
import start from "./modules/start.js";

const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);

    const { main, firstForm } = start(app, title);
    firstForm.addEventListener('submit', (eve) => {
        eve.preventDefault();

        const forms = getFormPerson(firstForm.count.value);
        firstForm.remove();
        main.append(...forms);
    })
}
init('.app', 'Выберите тур');