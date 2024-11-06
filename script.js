let computer = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4YYAuO3fYJwphYgrgYRJjucGm0SgV5FonA&s",
        category: "Asus",
        Mark:"Strix",
        price:"7,999 man",
        storage: 2048,
        em: "Windows 11",
        vd:"RTX 3060",
        ram: "16 GB"
    },
    {
        img: "https://amazoncomp.az/wp-content/uploads/2023/02/1883944_v01_b.jpg",
        category: "Acer",
        Mark:"Aspire 3",
        price:"1,499 man",
        storage: 256,
        em: "Windows 11",
        vd:"Yoxdur",
        ram: "8 GB"
    },
];

// Для каждого компьютера создаём уникальные ID для кнопки и модалки
computer.forEach((item, index) => {
    // Создание карточки компьютера
    let newComputer = `
        <div style="width: 200px;" class="card">
            <img src="${item.img}" alt="">
            <p>Category: ${item.category}</p>
            <p>Computer: ${item.Mark}</p>
            <p>Price: ${item.price}</p>
            <p>Storage: ${item.storage}</p>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${index}">View Details</button>
        </div>
    `;
    document.querySelector(".numbers").innerHTML += newComputer;

    // Создание модального окна
    let newModal = `
        <div class="modal fade" id="exampleModal${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="Image-style d-flex align-items-center justify-content-center">
                            <img style="width:200px;" src="${item.img}" alt="">
                        </div>
                        <div class="different">
                            <p>Category: ${item.category}</p>
                            <p>Mark: ${item.Mark}</p>
                            <p>Price: ${item.price}</p>
                            <p>Storage: ${item.storage}</p>
                            <p>Emeliyyat Sistemi: ${item.em}</p>
                            <p>Video Card: ${item.vd}</p>
                            <p>Ram: ${item.ram}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.querySelector(".modal-container").innerHTML += newModal; // Поместите все модалки в контейнер
});

// Для того, чтобы модалки работали по-одиночке, можно добавить следующий скрипт:
document.addEventListener('shown.bs.modal', function (event) {
    // Закрытие других модалей при открытии новой
    var activeModal = document.querySelector('.modal.show');
    var modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (modal !== activeModal) {
            var modalInstance = bootstrap.Modal.getInstance(modal);
            modalInstance.hide();
        }
    });
});
