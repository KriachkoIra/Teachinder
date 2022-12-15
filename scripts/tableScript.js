var paginationNumbers;
var paginatedList;
var listItems;
var nextButton;
var prevButton;
var hasListeners = false;

var paginationLimit = 10;
var pageCount;
let currentPage = 1;

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

const removeButtons = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    if(button.id != "prev-button" && button.id != "next-button")
        button.remove();
  });
};

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = (n) => {
  for (let i = 1; i <= n; i++) {
    appendPageNumber(i);
  }
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();
  
  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems = paginatedList.querySelectorAll("tr");
    
  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};

function displayTable(n) {
  listItems = n;
    
  if(listItems == 0){
    let nodataRow = document.createElement("tr");
    let nodataD = document.createElement("td");
    nodataD.colSpan = "5";
    nodataD.innerHTML = "No statistics.";
    nodataRow.appendChild(nodataD);
    document.getElementById("paginated-list").appendChild(nodataRow);
  }
    
  paginationNumbers = document.getElementById("pagination-numbers");
  paginatedList = document.getElementById("paginated-list");
  listItems = paginatedList.querySelectorAll("tr");
  nextButton = document.getElementById("next-button");
  prevButton = document.getElementById("prev-button");
  pageCount = Math.ceil(listItems.length / paginationLimit);
  currentPage = 1;
    
  getPaginationNumbers(pageCount);
  setCurrentPage(1);

    if(!hasListeners){
      prevButton.addEventListener("click", () => {
        setCurrentPage(currentPage - 1);
      });

      nextButton.addEventListener("click", () => {
        setCurrentPage(currentPage + 1);
      });
        
        hasListeners = true;
    }

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
}
