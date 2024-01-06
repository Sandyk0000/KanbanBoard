document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todo-form");
    const titleInput = document.getElementById("todo-title");
    const typeInput = document.getElementById("todo-type");
    const descriptionInput = document.getElementById("todo-description");
    const assigneeInput = document.getElementById("todo-assignee");
    const todoLane = document.getElementById("todo-lane");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = titleInput.value;
      const type = typeInput.value;
      const description = descriptionInput.value;
      const assignee = assigneeInput.value;
  
      if (!title || !type || !description || !assignee) return;
  
      const card = createTaskCard(title, type, description, assignee);
      todoLane.appendChild(card);
  
      // Reset input values
      titleInput.value = "";
      typeInput.value = "";
      descriptionInput.value = "";
      assigneeInput.value = "";
    });
  
    function createTaskCard(title, type, description, assignee) {
      const card = document.createElement("div");
      card.classList.add("task");
      card.setAttribute("draggable", "true");
  
      const cardContent = `
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Assignee:</strong> ${assignee}</p>
        <button class="delete-btn">Delete</button>
      `;
  
      card.innerHTML = cardContent;
  
      card.addEventListener("dragstart", () => {
        card.classList.add("is-dragging");
      });
  
      card.addEventListener("dragend", () => {
        card.classList.remove("is-dragging");
      });
  
      // Add event listener for delete button
      const deleteBtn = card.querySelector(".delete-btn");
      deleteBtn.addEventListener("click", () => {
        card.remove();
      });
  
      return card;
    }
  });
  