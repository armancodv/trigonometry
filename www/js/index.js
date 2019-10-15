class Model {
    constructor() {
        this.version = '4.0.0';
        this.package = 'com.armanco.trigonometry';
        this.homepage = 'https://arman.co.com/';
        this.api = 'https://arman.co.com/api/applist_formula.php';
        this.addId = 'ca-app-pub-4301546764905932/5615543166';
        this.title = 'Trigonometry';
        this.subTitle = 'Reference & Calculator';
        this.description = 'This app has two section, first one is a complete trigonometric calculator and another is a complete list of trigonometric identities and formulas.';
        this.page = 1;
        this.category = 0;

        this.categoriesTitles = ['Basis', 'Symmetry, shifts, and periodicity', 'Angle sum and difference', 'Double angle', 'Triple angle', 'Half angle', 'Power reduction', 'Product to sum', 'Sum to product', 'Inverse trigonometric', 'Derivative', 'Exponential'];
        this.categoriesThumbs = ['base', 'sym', 'sum', 'dou', 'tri', 'half', 'pow', 'pro', 'sum', 'inv', 'der', 'exp'];

        this.categoryTitles = [
            ['Sine', 'Cosine', 'Tangent', 'Cosecant', 'Secant', 'Cotangent', 'Pythagorean'],
            ['Reflected in θ=0', 'Reflected in θ=π/4', 'Reflected in θ=π/2', 'Shift by π/2', 'Shift by π', 'Shift by 2π'],
            ['Sine', 'Cosine', 'Tangent', 'Arcsine', 'Arccosine', 'Arctangent'],
            ['Sine', 'Cosine', 'Tangent', 'Cotangent'],
            ['Sine', 'Cosine', 'Tangent', 'Cotangent'],
            ['Sine', 'Cosine', 'Tangent', 'Cotangent'],
            ['Quadratic Sine', 'Quadratic Cosine', 'Cubic Sine', 'Cubic Cosine', 'Biquadratic Sine', 'Biquadratic Cosine'],
            ['cos⁡θ.cosφ', 'sinθ.sinφ', 'sin⁡θ.cosφ', 'cos⁡θ.sinφ', 'tan⁡θ.tanφ'],
            ['sinθ±sinφ', 'cosθ+cosφ', 'cosθ-cosφ'],
            ['arcsin(x)+arccos(x)', 'arctan(x)+arccot(x)', 'arctan(x)+arctan(1/x)', 'sin(arccos(x))', 'sin(arctan(x))', 'cos(arctan(x))', 'cos(arcsin(x))', 'tan(arcsin(x))', 'tan(arccos(x))', 'cot(arcsin(x))', 'cot(arccos(x))'],
            ['d(sin(x))/dx', 'd(cos(x))/dx', 'd(tan(x))/dx', 'd(cot(x))/dx', 'd(sec(x))/dx', 'd(csc(x))/dx', 'd(arcsin(x))/dx', 'd(arccos(x))/dx', 'd(arctan(x))/dx', 'd(arccot(x))/dx', 'd(arcsec(x))/dx', 'd(arccsc(x))/dx'],
            ['cis(x)', 'sinθ', 'cosθ', 'tanθ', 'cscθ', 'secθ', 'cotθ', 'arcsin(x)', 'arccos(x)', 'arctan(x)', 'arccsc(x)', 'arcsec(x)', 'arccot(x)']
        ];

        this.calculatorsTitles = ['Trigonometric Calculator', 'Inverse Trigonometric Calculator'];
        this.calculatorsThumbs = ['sin', 'asin'];

        this.inputsTitles = [
            ['Angle'],
            ['Inverse']
        ];

        this.inputsSigns = [
            ['θ (deg)'],
            ['x']
        ];

        this.outputsTitles = [
            ['Sine Function', 'Cosine Function', 'Tangent Function', 'Cotangent Function', 'Cosecant Function', 'Secant Function'],
            ['Inverse Sine Function', 'Inverse Cosine Function', 'Inverse Tangent Function', 'Inverse Cotangent Function', 'Inverse Cosecant Function', 'Inverse Secant Function']
        ];

        this.outputsSigns = [
            ['sin(θ)', 'cos(θ)', 'tan(θ)', 'cot(θ)', 'csc(θ)', 'sec(θ)'],
            ['arcsin(x) - deg', 'arccos(x) - deg', 'arctan(x) - deg', 'arccot(x) - deg', 'arccsc(x) - deg', 'arcsec(x) - deg']
        ];

        this.inputs = {};
        this.outputs = {};
        this.calculator = 0;
    }

    calculate() {
        if (this.calculator === 0) {
            let theta = this.inputs[0] * Math.PI / 180;
            let sin = Math.round(Math.sin(theta) * 1000000) / 1000000;
            let cos = Math.round(Math.cos(theta) * 1000000) / 1000000;
            let tan = Math.round(Math.tan(theta) * 1000000) / 1000000;
            let cot = Math.round(1 / Math.tan(theta) * 1000000) / 1000000;
            let csc = Math.round(1 / Math.sin(theta) * 1000000) / 1000000;
            let sec = Math.round(1 / Math.cos(theta) * 1000000) / 1000000;
            this.outputs = [sin, cos, tan, cot, csc, sec];
        } else if (this.calculator === 1) {
            let x = this.inputs[0];
            let arcsin = Math.round(Math.asin(x) * 1000000 * 180 / Math.PI) / 1000000;
            let arccos = Math.round(Math.acos(x) * 1000000 * 180 / Math.PI) / 1000000;
            let arctan = Math.round(Math.atan(x) * 1000000 * 180 / Math.PI) / 1000000;
            let arccot = Math.round(180 * 1000000 - Math.atan(x) * 1000000 * 180 / Math.PI) / 1000000;
            let arccsc = Math.round(Math.asin(1 / x) * 1000000 * 180 / Math.PI) / 1000000;
            let arcsec = Math.round(Math.acos(1 / x) * 1000000 * 180 / Math.PI) / 1000000;
            this.outputs = [arcsin, arccos, arctan, arccot, arccsc, arcsec];
        }
    };

    changeCategory(number) {
        this.category = number;
    }

    changeCalculator(number) {
        this.calculator = number;
        this.inputs = [];
        this.outputs = [];
    }

    changePage(page) {
        this.page = page;
    }

    getApps() {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', this.api + '?p=' + this.package);
        xhr.send();
        xhr.onload = () => {
            this.apps = JSON.parse(xhr.response);
        };
    }


};

class View {
    constructor() {
        this.menu = document.getElementById('menu');
        this.items = document.getElementById('items');
        this.apps = document.getElementById('apps');
        this.categoryTitle = document.getElementById('page3-h1');
        this.calculatorTitle = document.getElementById('page2-h1');
        this.calculatorImage = document.getElementById('page2-image');
        this.inputs = document.getElementById('inputs');
        this.outputs = document.getElementById('outputs');
        this.title = document.getElementById('title');
        this.subTitle = document.getElementById('subtitle');
        this.description = document.getElementById('description');
        this.armanco = document.getElementById('armanco');
        this.versions = Array.from(document.getElementsByClassName('version'));
        this.backs = Array.from(document.getElementsByClassName('back'));
    }

    openLink(link) {
        window.open(link, '_system');
    }

    changePage(page_number) {
        window.location.hash = '#page' + page_number;
        for (let i = 1; i <= 5; i++) {
            if (i === page_number) {
                document.getElementById('page' + i).style.display = 'block';
            } else {
                document.getElementById('page' + i).style.display = 'none';
            }
        }
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    addMenuItem(id, thumb, title) {
        let element = `<table id="${id}" class="property" cellpadding="0" cellspacing="0"><tr><td class="property-thumb">${thumb}</td><td class="property-name">${title}</td></tr></table>`;
        this.menu.insertAdjacentHTML("beforeend", element);
    }

    addMenuItemCalculator(id, thumb, title) {
        let element = `<table id="${id}" class="property2" cellpadding="0" cellspacing="0"><tr><td class="property2-thumb">${thumb}</td><td class="property2-name">${title}</td></tr></table>`;
        this.menu.insertAdjacentHTML("beforeend", element);
    }

    addMenuItemMute(id, thumb, title) {
        let element = `<table id="${id}" class="about" cellpadding="0" cellspacing="0"><tr><td class="about-thumb">${thumb}</td><td class="about-name">${title}</td></tr></table>`;
        this.menu.insertAdjacentHTML("beforeend", element);
    }

    addMenuItemApp(item) {
        let element = `<table class="app" cellpadding="0" cellspacing="0" id="app${item.name}"><tr><td class="app-thumb" style="background-image: url('${item.image}')"></td><td class="app-detail"><span class="app-name">${item.name}</span><br><span class="app-price">${item.price}</span><br><span class="app-description">${item.description}</span></td></tr></table>`;
        this.apps.insertAdjacentHTML("beforeend", element);
    }

    addFormula(id, src) {
        let element = `<img src="${src}" style="max-width:100%"><br>`;
        let place = Array.from(document.getElementById(id).getElementsByClassName('identity-formula'));
        place[0].insertAdjacentHTML("beforeend", element);
    }

    addItem(id, title) {
        let element = `<table id="${id}" class="identity" cellpadding="0" cellspacing="0"><tr><td class="identity-title">${title}</td></tr><tr><td class="identity-formula"></td></tr></table>`;
        this.items.insertAdjacentHTML("beforeend", element);
    }

    addInput(i, title, sign) {
        let element = `<table class="input" cellpadding="0" cellspacing="0"><tr><td class="input-lable">${title}<br><span class="input-sign">${sign}</span></td><td class="input-value"><input id="input${i}" type="number" step="0.0000000001" min="-9999999999999999999999999999999999999999" max="9999999999999999999999999999999999999999"></td></tr></table>`;
        this.inputs.insertAdjacentHTML("beforeend", element);
    }

    addOutput(i, title, sign) {
        let element = `<table class="converted" cellpadding="0" cellspacing="0"><tr><td class="converted-unit-fa">${title}</td></tr><tr><td class="converted-unit">${sign}</td></tr><tr><td class="converted-value"><span id="output${i}"></span></td></tr></table>`;
        this.outputs.insertAdjacentHTML("beforeend", element);
    }

    changeCalculatorImage(i) {
        this.calculatorImage.style.background = `url('images/calculators/${i + 1}.png') no-repeat center`;
        this.calculatorImage.style.backgroundSize = 'contain';
    }

    changeTitle(title) {
        this.title.innerHTML = title;
    }

    changeSubTitle(subTitle) {
        this.subTitle.innerHTML = subTitle;
    }

    changeCategoryTitle(categoryTitle) {
        this.categoryTitle.innerHTML = categoryTitle;
    }

    changeCalculatorTitle(calculatorTitle) {
        this.calculatorTitle.innerHTML = calculatorTitle;
    }

    changeDescription(description) {
        this.description.innerHTML = description;
    }

    changeOutputs(outputs) {
        for (let key in outputs) {
            document.getElementById(`output${key}`).innerHTML = outputs[key];
        }
    }

    changeVersion(version) {
        this.versions.forEach(element => {
            element.innerHTML = version;
        });
    }

    deleteChild(id) {
        let place = document.getElementById(id);
        place.innerHTML = "";
    }

};

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.init();
        this.ready();
    }

    init() {
        window.addEventListener("load", () => {
            this.view.changeTitle(this.model.title);
            this.view.changeSubTitle(this.model.subTitle);
            this.view.changeVersion(this.model.version);
            this.view.changeDescription(this.model.description);
            this.model.getApps();
            for (let i = 0; i < this.model.calculatorsTitles.length; i++) {
                let thumb = this.model.calculatorsThumbs[i];
                let title = this.model.calculatorsTitles[i];
                this.addMenuItemCalculator(i, thumb, title);
            }
            for (let i = 0; i < this.model.categoriesTitles.length; i++) {
                let thumb = this.model.categoriesThumbs[i];
                let title = this.model.categoriesTitles[i];
                this.addMenuItem(i, thumb, title);
            }
            this.addMenuItemMute('menua', 'apps', 'Similar Apps', 4);
            this.addMenuItemMute('menui', 'info', 'About', 5);
            document.addEventListener("backbutton", e => {
                if (this.model.page !== 1) {
                    e.preventDefault();
                    this.changePage(1);
                } else {
                    navigator.app.exitApp();
                }
            }, false);
            this.view.backs.forEach(element => {
                element.addEventListener("click", () => {
                    this.changePage(1);
                });
            });
            this.view.armanco.addEventListener("click", () => {
                this.view.openLink(this.model.homepage);
            });

        }, false);

    }

    ready() {
        document.addEventListener("deviceready", () => {
            admob.banner.config({
                id: this.model.addId,
                isTesting: false,
                autoShow: true
            });
            admob.banner.prepare();
        }, false);
    }

    changePage(page) {
        this.model.changePage(page);
        this.view.changePage(page);
    }

    async addMenuItemCalculator(i, thumb, title) {
        let id = `menucal${i}`;
        await this.view.addMenuItemCalculator(id, thumb, title);
        document.getElementById(id).addEventListener("click", async () => {
            await this.view.deleteChild('inputs');
            await this.view.deleteChild('outputs');
            this.model.changeCalculator(i);
            this.view.changeCalculatorTitle(title);
            this.view.changeCalculatorImage(i);
            for (let j = 0; j < this.model.outputsTitles[i].length; j++) {
                await this.view.addOutput(j, this.model.outputsTitles[i][j], this.model.outputsSigns[i][j]);
            }
            for (let j = 0; j < this.model.inputsTitles[i].length; j++) {
                await this.view.addInput(j, this.model.inputsTitles[i][j], this.model.inputsSigns[i][j]);
                let element = document.getElementById(`input${j}`);
                element.addEventListener("input", async () => {
                    this.model.inputs[j] = await element.value;
                    await this.model.calculate();
                    this.view.changeOutputs(this.model.outputs);
                });
            }
            this.changePage(2);
        });
    }

    async addMenuItem(i, thumb, title) {
        let id = `menu${i}`;
        await this.view.addMenuItem(id, thumb, title);
        document.getElementById(id).addEventListener("click", async () => {
            this.model.changeCategory(i);
            this.view.changeCategoryTitle(title);
            await this.view.deleteChild('items');
            for (let j = 0; j < this.model.categoryTitles[i].length; j++) {
                await this.view.addItem(`item${j}`, this.model.categoryTitles[i][j]);
                this.view.addFormula(`item${j}`, `images\\${i + 1}\\${j + 1}.png`);
            }
            this.changePage(3);
        });
    }

    async addMenuItemMute(id, thumb, title, page) {
        await this.view.addMenuItemMute(id, thumb, title);
        document.getElementById(id).addEventListener("click", async () => {
            if (page === 4) {
                await this.view.deleteChild('apps');
                this.model.apps.forEach(async element => {
                    await this.view.addMenuItemApp(element);
                    document.getElementById(`app${element.name}`).addEventListener("click", () => {
                        this.view.openLink(element.url);
                    });
                });
            }
            this.changePage(page);
        });
    }
};

const app = new Controller(new Model(), new View());