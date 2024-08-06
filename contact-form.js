// contact-form.js
const { firestore } = require('./firebase-config');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  const { name, email, message } = JSON.parse(event.body);

  try {
    await firestore.collection('submissions').add({
      name,
      email,
      message,
      timestamp: new Date(),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Submission received!' }),
    };
  } catch (error) {
    console.error('Failed to store submission:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to store submission', error: error.message }),
    };
  }
};
