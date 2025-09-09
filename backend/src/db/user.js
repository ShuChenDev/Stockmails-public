import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

async function subscribe(email, services) {
  if (!services) return;

  const user = await prisma.subscription.upsert({
    where: {
      email: email
    },
    update: {
      services: services
    },
    create: {
      email: email,
      services: services
    }
  })

  console.log(`User ${email} subscribed to ${services}`)
  return
}

async function unsubscribe(email) {
  try {
    const user = await prisma.subscription.delete({
      where: {
        email: email
      }
    });
    console.log(`User ${email} unsubscribed`)
  }
  catch (error) {
    console.log(`User Not Found`)
  }
  return
}

async function getSubscribe(email) {
  try {
    const user = await prisma.subscription.findUnique({
      where: {
        email: email
      }
    });

    console.log(`User ${email} subscribed to ${user.services}`);
    return user.services;
  }
  catch {
    console.log("User Not Found");
    return;
  }
}


export default {
  subscribe,
  unsubscribe,
  getSubscribe,
}

// subscribe("shu.chen.xm@gmail.com", encodeURIComponent("IT&Apple&Bitcoin&Tesla"))
// subscribe("shu.chen.xm.work@gmail.com", encodeURIComponent("Monetary&Fiscal&Inflation"))
// subscribe("shu.chen.xm.study@gmail.com", encodeURIComponent("Energy&Materials&Industrails"))
// subscribe("shu.chen.registerm@gmail.com", encodeURIComponent("SP500&Nasdaq&100"))
