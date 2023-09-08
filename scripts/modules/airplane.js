import createElement from "./createElement.js";

const createCockpit = (titleText) => {
    const cockpit = createElement('div', {
        className: 'cockpit',
    });
    const title = createElement('h1', {
        className: 'cockpit-title',
        textContent: titleText,
    });
    const button = createElement('button', {
        className: 'cockpit-confirm',
        type: 'submit',
        textContent: 'Подтвердить',
    });
    cockpit.append(title, button);
    return cockpit;
};

const createExit = () => {
    const fuselage = createElement('div', {
        className: 'exit fuselage',
    });
    return fuselage;
};

const createBlockSeat = (n, count) => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    const fuselage = createElement('ol', {
        className: 'fuselage',
    });

    for (let i = n; i < count + n; i++) {
        const wrapperRow = createElement('li');
        const seats = createElement('ol', {
            className: 'seats',
        });

        const seatsRow = letters.map(letter => {
            const seat = createElement('li', {
                className: 'seat',
            });
            const wrapperCheck = createElement('label');

            const check = createElement('input', {
                name: 'seat',
                type: 'checkbox',
                value: `${i}${letter}`,
            });

            wrapperCheck.append(check);
            seat.append(wrapperCheck);
            return seat;
        });

        seats.append(...seatsRow);
        wrapperRow.append(seats);
        fuselage.append(wrapperRow);
    }
    return fuselage;
};

/*<li>
  <ol class="seats">
    <li class="seat">
        <label>
            <input name="seat" type="checkbox" value="2A">
        </label>
    </li>
    <li class="seat">
        <label>
            <input name="seat" type="checkbox" value="2B">
        </label>
    </li>
    <li class="seat"><label><input name="seat" type="checkbox" value="2C"></label></li>
    <li class="seat"><label><input name="seat" type="checkbox" value="2D"></label></li>
    <li class="seat"><label><input name="seat" type="checkbox" value="2E"></label></li>
    <li class="seat"><label><input name="seat" type="checkbox" value="2F"></label></li>
  </ol>
</li>
*/

const createAirPlane = (title, scheme) => {
    const choisesSeat = createElement('form', {
        className: 'choises-seat',
    });
    const plane = createElement('fieldset', {
        className: 'plane',
        name: 'plane',
    });
    const cockpit = createCockpit(title);

    let n = 1;

    const elements = scheme.map((type) => {
        if (type === 'exit') {
            return createExit();
        }

        if (typeof type === 'number') {
            const blockSeat = createBlockSeat(n, type);
            n = n + type;

            return blockSeat;
        }
    });

    plane.append(cockpit, ...elements);
    choisesSeat.append(plane);

    return choisesSeat;
};

/*
<form class="">
        <fieldset class="" name="">
          <div class="exit fuselage"></div>

          <ol class="fuselage">
            <li>
              <ol class="seats">
                <li class="seat">
                  <label>
                    <input name="seat" type="checkbox" value="1A">
                  </label>
                </li>

                <li class="seat"><label><input name="seat" type="checkbox" value="1B"></label></li>
                <li class="seat"><label><input name="seat" type="checkbox" value="1C"></label></li>
                <li class="seat"><label><input name="seat" type="checkbox" value="1D"></label></li>
                <li class="seat"><label><input name="seat" type="checkbox" value="1E"></label></li>
                <li class="seat"><label><input name="seat" type="checkbox" value="1F"></label></li>
              </ol>
            </li>
*/

const airplane = (main, data) => {
    const title = 'Выберите места';
    const scheme = ['exit', 11, 'exit', 1, 'exit', 17, 'exit'];
    main.append(createAirPlane(title, scheme));
};

export default airplane;