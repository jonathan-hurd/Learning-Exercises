function isValidEmail(email) {
  let [ local, domain ] = email.split('@');

  return !!(
          hasAt(email) &&
          localValid(local) &&
          domainValid(domain)
  );
}

function hasAt(string) {
  return string.match(/@/);
}

function localValid(local) {
  return !local.match(/[^A-Za-z0-9]/);
}

function domainValid(domain) {
  return domain.match(/[a-z]+\.[a-z]+/) && !domain.match(/[^a-z\.]/);
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false