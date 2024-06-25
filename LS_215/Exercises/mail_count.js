function mailCount(emailData) {
  let emails = emailData.split('##||##')
  emails = emails.map(email => {
    let [sender, 
    subject, 
    date, 
    recipient, 
    body] = email.replaceAll('\n', '').split('#/#').map(ele => {
      return ele.replaceAll(/^[a-z]+: /gi, '');
    })

    return {
      sender: sender,
      subject: subject,
      date: date,
      recipient: recipient,
      body: body,
    }
  });

  let dates = emails.map(email => new Date(email.date) ).sort((a, b) => a - b );

  console.log(`Count of Email: ${emails.length}`);
  console.log(`Date Range: ${dates[0].toDateString()} - ${dates.slice(-1)[0].toDateString()}`)


}

mailCount(emailData);

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016