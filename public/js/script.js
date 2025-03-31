document.addEventListener("DOMContentLoaded", function () {
    const notificationBell = document.querySelector("#notification-bell");
    const notificationPopup = document.querySelector("#notification-popup");
    const closePopup = document.querySelector(".close-popup");
    const clearNotificationsBtn = document.getElementById("clear-notifications");

    if (notificationBell && notificationPopup) {
        // Show/hide popup when notification bell is clicked
        notificationBell.addEventListener("click", function (event) {
            event.stopPropagation();
            if (notificationPopup.classList.contains("hidden")) {
                notificationPopup.classList.remove("hidden");
                notificationPopup.style.display = "block";
            } else {
                notificationPopup.classList.add("hidden");
                notificationPopup.style.display = "none";
            }
        });

        if (closePopup) {
            closePopup.addEventListener("click", function () {
                notificationPopup.classList.add("hidden");
                notificationPopup.style.display = "none";
            });
        }

        document.addEventListener("click", function (event) {
            if (!notificationPopup.contains(event.target) && event.target !== notificationBell) {
                notificationPopup.classList.add("hidden");
                notificationPopup.style.display = "none";
            }
        });
    }

    // Clear notifications on click
    if (clearNotificationsBtn) {
        clearNotificationsBtn.addEventListener("click", function () {
            fetch("/clear-notifications", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        // Update UI after clearing notifications:
                        // 1. Remove notification items
                        const notificationList = document.getElementById("notification-list");
                        notificationList.innerHTML =
                            '<li id="no-notifications">No new notifications</li>';
                        // 2. Remove the notification badge (if present)
                        const badge = document.querySelector(".notification-badge");
                        if (badge) badge.remove();
                        // 3. Optionally hide the clear button
                        clearNotificationsBtn.style.display = "none";
                    } else {
                        console.error("Failed to clear notifications", data.error);
                    }
                })
                .catch((err) => {
                    console.error("Error in clearing notifications:", err);
                });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Hamburger and Desktop Menu
    const hamburger = document.querySelector(".hamburger-menu");
    const desktopMenu = document.getElementById("desktop-menu");
    const closeDesktopMenu = document.querySelector(".close-desktop-menu");

    // Open desktop menu when hamburger is clicked
    if (hamburger) {
        hamburger.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent event bubbling
            desktopMenu.classList.add("active");
        });
    }

    // Close desktop menu when close icon is clicked
    if (closeDesktopMenu) {
        closeDesktopMenu.addEventListener("click", function () {
            desktopMenu.classList.remove("active");
        });
    }

    // Optional: Close desktop menu when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!desktopMenu.contains(event.target) && !hamburger.contains(event.target)) {
            desktopMenu.classList.remove("active");
        }
    });
});

// Add this to your existing script.js or at the bottom of the page
document.addEventListener('DOMContentLoaded', function() {
    const notificationBell = document.getElementById('notification-bell');
    const notificationPopup = document.getElementById('notification-popup');
    const closePopup = document.querySelector('.close-popup');

    notificationBell.addEventListener('click', function(e) {
        e.preventDefault();
        notificationPopup.classList.toggle('active');
    });

    closePopup.addEventListener('click', function() {
        notificationPopup.classList.remove('active');
    });

    // Close popup when clicking outside
    document.addEventListener('click', function(e) {
        if (!notificationPopup.contains(e.target) && e.target !== notificationBell) {
            notificationPopup.classList.remove('active');
        }
    });
});
