getDataJSON = async() => {
    getTodolist = async() => {
        const getData = await fetch(
            "http://5e5e2557725f320014ed10b3.mockapi.io/lists"
        );
        const data = await getData.json();
        const getTask = await fetch(
            "http://5e5e2557725f320014ed10b3.mockapi.io/lists/1/tasks"
        );
        const dataTask = await getTask.json();
        const sortedDataTask = dataTask.sort((a, b) => {
            return a.order - b.order;
        });
        const getTask2 = await fetch(
            "http://5e5e2557725f320014ed10b3.mockapi.io/lists/2/tasks"
        );
        const dataTask2 = await getTask2.json();
        const sortedDataTask2 = dataTask2.sort((a, b) => {
            return a.order - b.order;
        });
        const getTask3 = await fetch(
            "http://5e5e2557725f320014ed10b3.mockapi.io/lists/3/tasks"
        );
        const dataTask3 = await getTask3.json();
        const sortedDataTask3 = dataTask3.sort((a, b) => {
            return a.order - b.order;
        });

        printTodolist = () => {
            const print = document.getElementById("todolist");
            data.forEach(x => {
                const li_tdl = document.createElement("li");
                li_tdl.innerHTML = x.name;
                print.appendChild(li_tdl);

                const form = document.createElement("form")


                function addTask(listId) {
                    let br = document.createElement("br")
                    const label1 = document.createElement("label")
                    label1.innerText = "Tên Task: ";
                    const input = document.createElement("input")
                    input.className = "title";
                    input.placeholder = "Title"
                    input.type = "text";
                    form.appendChild(label1)
                    form.appendChild(input);

                    form.appendChild(br)

                    const label2 = document.createElement("label")
                    label2.innerText = "Mô tả : ";
                    const input2 = document.createElement("input")
                    input2.className = "desc"
                    input2.placeholder = "Mô tả"
                    input2.type = "text"
                    form.appendChild(label2);
                    form.appendChild(input2);

                    const btn = document.createElement("button")
                    btn.className = "btn"
                    btn.innerText = "Thêm Task"
                    form.appendChild(btn)
                    btn.onclick = "postData(`http://5e5e2557725f320014ed10b3.mockapi.io/lists/${listId}/tasks`,data)"

                }
                li_tdl.appendChild(form);


                const filterByNameTask = sortedDataTask.filter(
                    task => task.listId === x.id
                );
                const ul = document.createElement("ul");
                filterByNameTask.forEach(y => {
                    const li1 = document.createElement("li");
                    li1.innerHTML = y.order + "." + y.title;
                    ul.appendChild(li1);
                });
                li_tdl.appendChild(ul);

                console.log(filterByNameTask);
                const filterByNameTask2 = sortedDataTask2.filter(
                    task => task.listId === x.id
                );
                filterByNameTask2.forEach(y => {
                    const li2 = document.createElement("li");
                    li2.innerHTML = y.order + "." + y.title;
                    ul.appendChild(li2);
                });
                li_tdl.appendChild(ul);
                const filterByNameTask3 = sortedDataTask3.filter(
                    task => task.listId === x.id
                );

                filterByNameTask3.forEach(y => {
                    const li3 = document.createElement("li");
                    li3.innerHTML = y.order + "." + y.title;
                    ul.appendChild(li3);
                });
                li_tdl.appendChild(ul);
                addTask(x.id);
            });
            postData = async() => {
                var data = {
                    title: document.getElementsByClassName("title").value,
                    desc: document.getElementsByClassName("desc").value,
                    order: Math.random()
                }
                async function postData(url = '', data = {}) {
                    const response = await fetch(url, {
                        method: 'POST',
                        body: JSON.stringify(data)
                    });
                    return await response.json();
                }
            }
        };
        printTodolist();
    };
    getTodolist();
};

getDataJSON();