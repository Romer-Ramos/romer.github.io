function showPopup() {
document.getElementById("popup").style.display = "block";    

    let totalSum = 0;

    const radioButtonsGroup1 = document.querySelectorAll('input[name="size"]');
    const radioButtonsGroup2 = document.querySelectorAll('input[name="quality"]');
    const radioButtonsGroup3 = document.querySelectorAll('input[name="add"]');

    function calculateSum(group) {
        let sum = 0;
        group.forEach(radioButton => {
            if (radioButton.checked) {
                sum += parseInt(radioButton.value, 10);
            }
        });
        return sum;
    }

    totalSum += calculateSum(radioButtonsGroup1);
    totalSum += calculateSum(radioButtonsGroup2);
    totalSum += calculateSum(radioButtonsGroup3);

    if (totalSum !== 0) {
        document.getElementById("result").textContent = "Total Price of your Commission: $" + totalSum;
    } else {
        document.getElementById("result").textContent = "Total Price of your Commission: No options selected";
    }
        
        const nameElement = document.getElementById("name");

        const nameValue = nameElement.value;

        const nameresultElement = document.getElementById("nameresult");
        nameresultElement.textContent = `Name: ${nameValue}`;

        const emailElement = document.getElementById("email");

        const emailValue = emailElement.value;

        const emailresultElement = document.getElementById("emailresult");
        emailresultElement.textContent = `Email: ${emailValue}`;

        const charElement = document.getElementById("char");

        const charValue = charElement.value;

        const charresultElement = document.getElementById("charresult");
        charresultElement.textContent = `Character to draw: ${charValue}`;

        const radioButtons = document.getElementsByName("payment");
            
        let selectedValue = null;
        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                selectedValue = radioButtons[i].value;
                break;
            }
        }
        const resultElement = document.getElementById("paymentresult");
        if (selectedValue !== null) {
            resultElement.textContent = `Payment Method: ${selectedValue}`;
        } else {
            resultElement.textContent = "Payment Method: No option selected";
        }

}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
}

function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");
    modalImage.src = imageSrc;
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}