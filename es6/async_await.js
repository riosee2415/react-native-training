// async & await

function resolvePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done!!");
    }, 2000);
  });
}

async function getpromise1() {
  const result = await resolvePromise();

  console.log(result);

  await resolvePromise();
  console.log(result);
}

getpromise1();
