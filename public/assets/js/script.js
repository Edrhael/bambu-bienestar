console.log('Hello Bambú!')

// Referencia al botón
const themeToggleButton = document.querySelector('[ui-data-id="theme-toggle-btn"]');

// Detectar y aplicar el tema guardado
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
	document.body.classList.add(savedTheme);
} else {
	// Detectar preferencia del sistema si no hay tema guardado
	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	document.body.classList.add(prefersDark ? 'dark-theme' : 'light-theme');
}

// Alternar tema y guardar preferencia

themeToggleButton.addEventListener('click', () => {
	if (document.body.classList.contains('dark-theme')) {
		document.body.classList.replace('dark-theme', 'light-theme');
		localStorage.setItem('theme', 'light-theme');

	} else {
		document.body.classList.replace('light-theme', 'dark-theme');
		localStorage.setItem('theme', 'dark-theme');
	}
});

// class EventDelegator {
// 	constructor(containerSelector) {
// 		this.container = document.querySelector(containerSelector);
//
// 		if (!this.container) {
// 			throw new Error(`Contenedor ${containerSelector} no encontrado.`);
// 		}
//
// 		this.eventHandlers = {};
// 		this.init();
// 	}
//
// 	init() {
// 		// Escucha genérica para eventos más comunes
// 		this.container.addEventListener('click', (event) => this.handleEvent(event, 'click'));
// 		this.container.addEventListener('change', (event) => this.handleEvent(event, 'change'));
// 		this.container.addEventListener('input', (event) => this.handleEvent(event, 'input'));
// 	}
//
// 	handleEvent(event, eventType) {
// 		const targetElement = event.target.closest('[ui-data]');
// 		if (!targetElement) return;
//
// 		const uiData = targetElement.getAttribute('ui-data');
//
// 		if (this.eventHandlers[eventType] && this.eventHandlers[eventType][uiData]) {
// 			this.eventHandlers[eventType][uiData](event, targetElement);
// 		}
// 	}
//
// 	on(eventMap) {
// 		for (const [eventType, handlers] of Object.entries(eventMap)) {
// 			if (!this.eventHandlers[eventType]) {
// 				this.eventHandlers[eventType] = {};
// 			}
//
// 			for (const [uiDataValue, handler] of Object.entries(handlers)) {
// 				this.eventHandlers[eventType][uiDataValue] = handler;
// 			}
// 		}
// 	}
// }
//
// // Inicialización del delegador
// const delegator = new EventDelegator('#app');
//
// // Registro eficiente de eventos
// delegator.on({
// 	click: {
// 		'button-save': (event, element) => {
// 			console.log('Guardar clickeado!', element);
// 			alert('Guardando...');
// 		},
// 		'button-delete': (event, element) => {
// 			console.log('Eliminar clickeado!', element);
// 			element.closest('.item').remove();
// 		}
// 	},
// 	input: {
// 		'search-box': (event, element) => {
// 			console.log('Búsqueda:', element.value);
// 		}
// 	}
// });
