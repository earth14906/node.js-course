const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
sgMail.send({
    to: email,
    from: 'athitakarn.m@gmail.com',
    subject: 'Thank for joining in!',
    text: 'welcom to app, ${name}. Let me know how you get along with app!.'
})

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'athitakarn.m@gmail.com',
        subject: 'sorry to see you go!',
        text: 'Goodbye, ${name}. I hope to see you .'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
}
// sgMail.send({
//     to: 'athitakarn.m@gmail.com',
//     from: 'athitakarn.m@gmail.com',
//     subject: 'This is my first creation!',
//     text: 'I hope this one get to you.'
// })
