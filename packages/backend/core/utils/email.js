const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API);

const orderSuccessMail = async (email, orderId) => {
  try {
    await sgMail.send({
      to: email,
      from: 'SuperMarket Customer Services <ferne.dare62@ethereal.email>',
      subject: `Order ${orderId} Confirmation and details`,
      text: 'Order Confirmation',
      html: `<a href="http://localhost:3000/order?id=${orderId}">Track Your Order Here</a>`,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { orderSuccessMail };
