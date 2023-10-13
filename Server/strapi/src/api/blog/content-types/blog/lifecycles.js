const {sendEmailToSubscribers} = require('../../services/email')

module.exports = {
    afterCreate(event) {
        const {result} = event;

        sendEmailToSubscribers()
            .then(() => {
                console.log("Emails sent!");
            })
            .catch((error) => {
                console.error("Error sending email:", error);
            });
    }
}