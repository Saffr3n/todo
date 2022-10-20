import './style.css';

const data = require('./data.json');
const storage = window.localStorage;

window.addEventListener('load', () => {
  loadTasks();
  loadProjects();

  const allTasksLink = document.querySelector('#all');
  allTasksLink.addEventListener('click', e => sidebarLinkEH(e.target));

  const todayTasksLink = document.querySelector('#today');
  todayTasksLink.addEventListener('click', e => sidebarLinkEH(e.target));

  const newTaskBtn = document.querySelector('#content button');
  newTaskBtn.addEventListener('click', e => data.projects.length > 0 ? showDialog(e.target) : alert('You need to have at least one project!'));

  const newProjBtn = document.querySelector('#sidebar button');
  newProjBtn.addEventListener('click', e => showDialog(e.target));
});

function loadTasks (projectIndex = null) {
  const tasks = document.querySelector('#tasks tbody');
  tasks.innerHTML = '';

  data.tasks.sort((currentTask, nextTask) => currentTask.dueDate > nextTask.dueDate ? 1: -1);

  for (let i = 0; i < data.tasks.length; i++) {
    let hide = false;
    if ((projectIndex === -1 && (new Date(data.tasks[i].dueDate)).toDateString() !== (new Date(Date.now())).toDateString()) ||
        (projectIndex !== -1 && projectIndex !== null && data.tasks[i].projectIndex !== projectIndex))
      hide = true;

    const task = document.createElement('tr');
    task.classList.add('task');
    if (data.tasks[i].completed) task.classList.add('completed');
    if (hide) task.style.display = 'none';
    task.style.boxShadow = `-0.2rem 0 ${data.projects[data.tasks[i].projectIndex].color}`;

    const cb = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';
    checkbox.checked = data.tasks[i].completed;
    cb.appendChild(checkbox);

    const title = document.createElement('th');
    title.classList.add('title');
    title.textContent = data.tasks[i].title;

    const description = document.createElement('td');
    description.classList.add('description');
    description.textContent = data.tasks[i].description;

    const priority = document.createElement('td');
    priority.classList.add('priority');
    priority.textContent = data.tasks[i].priority;

    switch (data.tasks[i].priority) {
      case 'high':
        priority.style.color = 'red';
        break;
      case 'medium':
        priority.style.color = 'orange';
        break;
      case 'low':
        priority.style.color = 'green';
    }

    const dueDate = document.createElement('td');
    dueDate.classList.add('date');
    dueDate.textContent = (new Date(data.tasks[i].dueDate).toDateString());

    const rm = document.createElement('td');
    const remove = document.createElement('span');
    remove.className = 'material-symbols-outlined remove';
    remove.textContent = 'delete';
    remove.addEventListener('click', e => removeButtonEH(e.target));
    rm.appendChild(remove);

    task.appendChild(cb);
    task.appendChild(title);
    task.appendChild(description);
    task.appendChild(priority);
    task.appendChild(dueDate);
    task.appendChild(rm);
    
    tasks.appendChild(task);
  }
}

function loadProjects() {
  const list = document.querySelector('#list');
  list.innerHTML = '';

  for (let i = 0; i < data.projects.length; i++) {
    const proj = document.createElement('div');
    proj.classList.add('project');
    proj.style.boxShadow = `-0.2rem 0 ${data.projects[i].color}`;

    const link = document.createElement('a');
    link.textContent = data.projects[i].title;
    link.addEventListener('click', e => sidebarLinkEH(e.target));
    proj.appendChild(link);

    const remove = document.createElement('span');
    remove.className = 'material-symbols-outlined remove';
    remove.textContent = 'delete';
    remove.addEventListener('click', e => removeButtonEH(e.target));
    proj.appendChild(remove);

    list.appendChild(proj);
  }
}

function newTask (title, projectIndex, dueDate, priority, description) {
  data.tasks.push({ title, projectIndex, dueDate, priority, description, completed: false });
}

function newProject (title, color) {
  data.projects.push({ title, color });
}

function removeTask (taskIndex) {
  data.tasks.splice(taskIndex, 1);
  document.querySelectorAll('.task')[taskIndex].remove();
}

function removeProject (projectIndex) {
  data.projects.splice(projectIndex, 1);
  document.querySelectorAll('.project')[projectIndex].remove();

  for (let i = 0; i < data.tasks.length; i++) {
    if (data.tasks[i].projectIndex > projectIndex) {
      data.tasks[i].projectIndex--;
      continue;
    }

    if (data.tasks[i].projectIndex === projectIndex) {
      removeTask(i);
      i--;
    }
  }
}

function showDialog (button) {
  const dialog = document.createElement('div');
  dialog.id = 'dialog';
  dialog.addEventListener('click', e => {
    if (e.target === dialog) dialog.remove();
  });

  const form = document.createElement('div');
  form.id = 'form';

  const heading = document.createElement('div');
  heading.classList.add('heading');
  form.appendChild(heading);

  const inputs = document.createElement('div');
  inputs.id = 'inputs';
  form.appendChild(inputs);

  const titleGroup = document.createElement('div');
  titleGroup.classList.add('form-group');
  const titleLabel = document.createElement('label');
  titleLabel.htmlFor = 'title';
  titleLabel.textContent = 'Title:';
  titleGroup.appendChild(titleLabel);
  const title = document.createElement('input');
  title.type = 'text';
  title.id = 'title';
  titleGroup.appendChild(title);
  inputs.appendChild(titleGroup);

  if (button.parentNode.id === 'content') {
    heading.textContent = 'New Task';

    const descriptionGroup = document.createElement('div');
    descriptionGroup.classList.add('form-group');
    const descriptionLabel = document.createElement('label');
    descriptionLabel.htmlFor = 'description';
    descriptionLabel.textContent = 'Description:';
    descriptionGroup.appendChild(descriptionLabel);
    const description = document.createElement('input');
    description.type = 'text';
    description.id = 'description';
    descriptionGroup.appendChild(description);
    inputs.appendChild(descriptionGroup);

    const projectGroup = document.createElement('div');
    projectGroup.classList.add('form-group');
    const projectLabel = document.createElement('label');
    projectLabel.htmlFor = 'project';
    projectLabel.textContent = 'Project:';
    projectGroup.appendChild(projectLabel);
    const project = document.createElement('select');
    project.id = 'project';
    for (let i = 0; i < data.projects.length; i++) {
      const option = document.createElement('option');
      option.text = data.projects[i].title;
      project.add(option);
    }
    projectGroup.appendChild(project);
    inputs.appendChild(projectGroup);

    const priorityGroup = document.createElement('div');
    priorityGroup.classList.add('form-group');
    const priorityLabel = document.createElement('label');
    priorityLabel.htmlFor = 'priority';
    priorityLabel.textContent = 'Priority:';
    priorityGroup.appendChild(priorityLabel);
    const priority = document.createElement('select');
    priority.id = 'priority';
    const low = document.createElement('option');
    low.text = 'low';
    priority.add(low);
    const medium = document.createElement('option');
    medium.text = 'medium';
    priority.add(medium);
    const high = document.createElement('option');
    high.text = 'high';
    priority.add(high);
    priorityGroup.appendChild(priority);
    inputs.appendChild(priorityGroup);

    const dateGroup = document.createElement('div');
    dateGroup.classList.add('form-group');
    const dateLabel = document.createElement('label');
    dateLabel.htmlFor = 'date';
    dateLabel.textContent = 'Date:';
    dateGroup.appendChild(dateLabel);
    const date = document.createElement('input');
    date.type = 'date';
    date.id = 'date';
    dateGroup.appendChild(date);
    inputs.appendChild(dateGroup);
  }
  else {
    heading.textContent = 'New Project';

    const colorGroup = document.createElement('div');
    colorGroup.classList.add('form-group');
    const colorLabel = document.createElement('label');
    colorLabel.htmlFor = 'color';
    colorLabel.textContent = 'Color:';
    colorGroup.appendChild(colorLabel);
    const color = document.createElement('input');
    color.type = 'color';
    color.id = 'color';
    colorGroup.appendChild(color);
    inputs.appendChild(colorGroup);
  }

  const submit = document.createElement('button');
  submit.textContent = 'Submit';
  form.appendChild(submit);

  submit.addEventListener('click', () => {
    if (!title.value) return;
    
    if (button.parentNode.id === 'content') {
      if (!date.value) return;
      newTask(title.value, project.selectedIndex, date.value, priority.value, description.value);
      const projectIndex = document.querySelector('#all').classList.contains('active') ? null :
                           [...document.querySelectorAll('#projects a')].indexOf(document.querySelector('.active'));
      loadTasks(projectIndex);
    }
    else {
      newProject(title.value, color.value);
      loadProjects();
    }

    dialog.remove();
  });

  dialog.appendChild(form);
  document.body.appendChild(dialog);
}

function sidebarLinkEH (element) {
  const links = document.querySelectorAll('#sidebar a');
  links.forEach(link => link.classList.remove('active'));
  element.classList.add('active');

  if (element.id === 'all') {
    document.querySelector('#content .heading').textContent = 'All Tasks';
    loadTasks();
  }
  else if (element.id === 'today') {
    document.querySelector('#content .heading').textContent = 'Today';
    loadTasks(-1);
  }
  else {
    const projectIndex = [...element.parentNode.parentNode.childNodes].indexOf(element.parentNode);
    document.querySelector('#content .heading').textContent = data.projects[projectIndex].title;
    loadTasks(projectIndex);
  }
}

function removeButtonEH (element) {
  if (element.parentNode.className)
    removeProject([...element.parentNode.parentNode.childNodes].indexOf(element.parentNode));
  else
    removeTask([...element.parentNode.parentNode.parentNode.childNodes].indexOf(element.parentNode.parentNode));
}
