document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".todo_list_title");
    const content = document.querySelector(".todo_list_content");
    const add_btn = document.querySelector(".add_btn");
    const newNotesContainer = document.querySelector(".new_notes_container");
  
    function addNote() {
      const noteTitle = title.value.trim();
      const noteContent = content.value.trim();
  
      if (noteTitle === "" || noteContent === "") {
        alert("Please enter a title and notes");
        return;
      }
  
    
      const newContainer = document.createElement("div");
      newContainer.classList.add("newContainer");
  
      const newTitleContainer = document.createElement("div");
      newTitleContainer.classList.add("newTitleContainer");
      const titleLabel = document.createElement("label");
      titleLabel.classList.add("titleLabel");
      titleLabel.setAttribute("for", "newtitle");
      titleLabel.textContent = "Title:";
      const newTitle = document.createElement("p");
      newTitle.classList.add("newTitle");
      newTitle.textContent = noteTitle;
      newTitleContainer.append(titleLabel, newTitle);
  
    
      const newContentContainer = document.createElement("div");
      newContentContainer.classList.add("newContentContainer");
      const newContent = document.createElement("div");
      newContent.classList.add("newContent");
      newContent.textContent = noteContent;
      newContentContainer.append(newContent);
  
    
      const newButtonContainer = document.createElement("div");
      newButtonContainer.classList.add("newButtonContainer");
      const done_btn = document.createElement("button");
      done_btn.classList.add("done");
      done_btn.textContent = "done";

      done_btn.addEventListener("click", () => {
        alert("notes done");
        titleLabel.style.textDecoration = "line-through";
        newTitle.style.textDecoration = "line-through";
        newContent.style.textDecoration = "line-through";
      });
      const delete_btn = document.createElement("button");
      delete_btn.classList.add("delete");
      delete_btn.textContent = "delete";
      delete_btn.addEventListener("click", () => {
        alert("notes deleted");
        newNotesContainer.removeChild(newContainer);
      });
      newButtonContainer.append(done_btn, delete_btn);
  
  
      newContainer.append(newTitleContainer, newContentContainer, newButtonContainer);
  
     
      newNotesContainer.appendChild(newContainer);
      newContainer.offsetHeight;           
      newContainer.classList.add("visible"); 
  

      title.value = "";
      content.value = "";
    }
  
    add_btn.addEventListener("click", addNote);

    [title, content].forEach(inputEl => {
      inputEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          addNote();
        }
      });
    });
  });
  