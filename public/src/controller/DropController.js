class DropController {
    constructor() {
        this.btnSendFileElement = document.querySelector('#btn-send-file');

        this.inputFileElement = document.querySelector('#files');

        this.snackModalElement = document.querySelector('#react-snackbar-root');

        this.initEvents();
    }
    initEvents() {

        this.btnSendFileElement.addEventListener('click', event => {
            this.inputFileElement.click();
        })

        this.inputFileElement.addEventListener('change', event => {
            console.log(event.target.files);
            this.snackModalElement.style.display = 'block';

        })
    }
}
//react-snackbar-root