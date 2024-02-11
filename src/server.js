import {
  createServer,
  Model,
  hasMany,
  belongsTo,
  RestSerializer,
} from "miragejs";

export function makeServer() {
  let server = createServer({
    models: {
      customer: Model.extend({
        orders: hasMany(),
        activePackages: hasMany(),
      }),
      internetPackageType: Model.extend({
        internetPackages: hasMany(),
      }),
      internetSpeed: Model.extend({
        internetPackages: hasMany(),
      }),
      internetPackage: Model.extend({
        internetPackageType: belongsTo(),
        internetSpeed: belongsTo(),
        orderDetails: hasMany(),
      }),
      order: Model.extend({
        customer: belongsTo(),
        orderDetails: hasMany(),
      }),
      orderDetail: Model.extend({
        order: belongsTo(),
        internetPackage: belongsTo(),
      }),
      activePackage: Model.extend({
        customer: belongsTo(),
        activePackageDetails: hasMany(),
      }),
      activePackageDetail: Model.extend({
        activePackage: belongsTo(),
        internetPackage: belongsTo(),
      }),
    },

    seeds(server) {
      let cust1 = server.create("customer", {
        //   id: 1,
        name: "kris",
        email: "kris@gmail.com",
        password: "password",
        phoneNumber: "085755894943",
        address: "Jombang",
      });
      server.create("customer", {
        //   id: 2,
        name: "widya",
        email: "widya@gmail.com",
        password: "rahasia",
        phoneNumber: "085755894944",
        address: "Surabaya",
      });

      let inetPackageType1 = server.create("internetPackageType", {
        //   id: 1,
        quota: "unlimited",
      });
      let inetPackageType2 = server.create("internetPackageType", {
        //   id: 2,
        quota: "5 GB",
      });
      let inetPackageType3 = server.create("internetPackageType", {
        //   id: 3,
        quota: "10 GB",
      });
      let inetPackageType4 = server.create("internetPackageType", {
        //   id: 4,
        quota: "15 GB",
      });
      let inetPackageType5 = server.create("internetPackageType", {
        //   id: 5,
        quota: "20 GB",
      });
      let inetPackageType6 = server.create("internetPackageType", {
        //   id: 6,
        quota: "25 GB",
      });
      let inetPackageType7 = server.create("internetPackageType", {
        //   id: 7,
        quota: "30 GB",
      });
      let inetPackageType8 = server.create("internetPackageType", {
        //   id: 8,
        quota: "50 GB",
      });
      let inetPackageType9 = server.create("internetPackageType", {
        //   id: 9,
        quota: "100 GB",
      });

      let inetSpeed1 = server.create("internetSpeed", {
        //   id: 1,
        speed: "15 Mbps",
      });
      let inetSpeed2 = server.create("internetSpeed", {
        //   id: 2,
        speed: "20 Mbps",
      });
      let inetSpeed3 = server.create("internetSpeed", {
        //   id: 3,
        speed: "50 Mbps",
      });
      let inetSpeed4 = server.create("internetSpeed", {
        //   id: 4,
        speed: "80 Mbps",
      });

      let inetPackage1 = server.create("internetPackage", {
        internetPackageType: inetPackageType1,
        internetSpeed: inetSpeed2,
        name: "Unlimited Hemat",
        pricePerMonth: 350000,
        description: "lorem ipsum dolor sit amet....",
      });
      server.create("internetPackage", {
        internetPackageType: inetPackageType1,
        internetSpeed: inetSpeed3,
        name: "Unlimited Basic",
        pricePerMonth: 500000,
        description: "lorem ipsum dolor sit amet....",
      });
      server.create("internetPackage", {
        internetPackageType: inetPackageType1,
        internetSpeed: inetSpeed4,
        name: "Unlimited Ultra",
        pricePerMonth: 1000000,
        description: "lorem ipsum dolor sit amet....",
      });

      server.create("internetPackage", {
        internetPackageType: inetPackageType2,
        internetSpeed: inetSpeed1,
        name: "Kuota Hemat",
        pricePerMonth: 30000,
        description: "lorem ipsum dolor sit amet....",
      });

      server.create("internetPackage", {
        internetPackageType: inetPackageType3,
        internetSpeed: inetSpeed1,
        name: "Kuota Cukup",
        pricePerMonth: 40000,
        description: "lorem ipsum dolor sit amet....",
      });

      server.create("internetPackage", {
        internetPackageType: inetPackageType4,
        internetSpeed: inetSpeed1,
        name: "Kuota Reguler 1",
        pricePerMonth: 45000,
        description: "lorem ipsum dolor sit amet....",
      });

      let inetPackage7 = server.create("internetPackage", {
        internetPackageType: inetPackageType5,
        internetSpeed: inetSpeed1,
        name: "Kuota Reguler 2",
        pricePerMonth: 50000,
        description: "lorem ipsum dolor sit amet....",
      });

      server.create("internetPackage", {
        internetPackageType: inetPackageType6,
        internetSpeed: inetSpeed1,
        name: "Kuota Reguler 3",
        pricePerMonth: 55000,
        description: "lorem ipsum dolor sit amet....",
      });

      server.create("internetPackage", {
        internetPackageType: inetPackageType7,
        internetSpeed: inetSpeed1,
        name: "Kuota Reguler 4",
        pricePerMonth: 60000,
        description: "lorem ipsum dolor sit amet....",
      });

      let inetPackage10 = server.create("internetPackage", {
        internetPackageType: inetPackageType8,
        internetSpeed: inetSpeed2,
        name: "Kuota Puas",
        pricePerMonth: 70000,
        description: "lorem ipsum dolor sit amet....",
      });

      server.create("internetPackage", {
        internetPackageType: inetPackageType9,
        internetSpeed: inetSpeed2,
        name: "Kuota Puas Banget",
        pricePerMonth: 100000,
        description: "lorem ipsum dolor sit amet....",
      });

      let order1 = server.create("order", {
        customer: cust1,
        date: "2024-02-10T03:55:01.221Z",
        isPaid: false,
      });

      server.create("orderDetail", {
        internetPackage: inetPackage1,
        order: order1,
        price: 350000,
      });
      server.create("orderDetail", {
        internetPackage: inetPackage7,
        order: order1,
        price: 50000,
      });

      let activePkg1 = server.create("activePackage", {
        customer: cust1,
        date: "2024-02-10T03:55:01.221Z",
      });

      server.create("activePackageDetail", {
        internetPackage: inetPackage1,
        activePackage: activePkg1,
        remainQuota: "unlimited",
      });

      server.create("activePackageDetail", {
        internetPackage: inetPackage10,
        activePackage: activePkg1,
        remainQuota: "unlimited",
      });
    },

    serializers: {
      internetPackage: RestSerializer.extend({
        include: ["internetPackageType", "internetSpeed"],
        embed: true,
      }),
    },

    routes() {
      this.namespace = "api";
      // this.urlPrefix = "http://localhost:3004";

      this.get("/internet-packages", (schema) => {
        return schema.internetPackages.all();
      });
    },
  });

  return server;
}
