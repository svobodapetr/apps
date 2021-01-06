window.onload = () => {

    new DragList();

};

class DragList {

    draggables = document.getElementsByClassName('draggable');
    containers = document.getElementsByClassName('list-container');
    images = document.getElementsByTagName('img');

    constructor() {

        this.initDraggables();

        this.initContainers();

        this.disableImages();

    }

    disableImages() {

        for (let image of this.images) {

            image.addEventListener('dragstart', (e) => {

                e.preventDefault();

                return;

            })

        }

    }

    initDraggables() {

        if (this.draggables.length === 0) {

            alert('no draggables');

            return;

        }

        for (let draggable of this.draggables) {

            draggable.addEventListener('dragstart', (e) => {

                draggable.classList.add('dragging');

            });

            draggable.addEventListener('dragend', (e) => {

                draggable.classList.remove('dragging');

                this.validateOrder();

                this.validateComplete();

            });

        }

    }

    validateOrder() {

        let limit = this.draggables.length;
        let i = 1;

        for (i; i <= limit; i++) {

            let item = this.draggables[i - 1];
            let correctPostion = (item.dataset.order == i);

            if (correctPostion) {

                item.classList.add('correct');
                item.classList.remove('incorrect');

            }
            else {

                item.classList.add('incorrect');
                item.classList.remove('correct');

            }

        }

    }

    validateComplete() {

        if (document.getElementsByClassName('correct').length === this.draggables.length) {

            alert('all correct');

        }

    }

    initContainers() {

        if (this.containers.length === 0) {

            alert('no containers');

            return;

        }

        for (let container of this.containers) {

            container.addEventListener('dragover', (e) => {

                e.preventDefault();

                let afterElement = this.getDragAfterElement(container, e.clientY);

                let draggable = document.querySelector('.dragging');

                if (afterElement == null) {

                    container.appendChild(draggable);

                }
                else {

                    container.insertBefore(draggable, afterElement);

                }

            });

        }

    }

    getDragAfterElement(container, y) {

        let draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

        return draggableElements.reduce(

            (closest, child) => {

                let box = child.getBoundingClientRect();
                let offset = (y - box.top - (box.height / 2));

                if (offset < 0 && offset > closest.offset) {

                    return {offset: offset, element: child};

                }
                else {

                    return closest;

                }

            },

            {offset: Number.NEGATIVE_INFINITY}

        ).element;

    }

}