import {MigrationInterface, QueryRunner} from "typeorm";

export class management1604112595775 implements MigrationInterface {
    name = 'management1604112595775'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_products" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "price" varchar NOT NULL, "category_id" integer NOT NULL, "stock" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_products"("id", "name", "price", "category_id", "stock") SELECT "id", "name", "price", "category_id", "stock" FROM "products"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`ALTER TABLE "temporary_products" RENAME TO "products"`);
        await queryRunner.query(`CREATE TABLE "temporary_items" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "order_id" integer NOT NULL, "product_id" integer NOT NULL, "quantity" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_items"("id", "order_id", "product_id", "quantity") SELECT "id", "order_id", "product_id", "quantity" FROM "items"`);
        await queryRunner.query(`DROP TABLE "items"`);
        await queryRunner.query(`ALTER TABLE "temporary_items" RENAME TO "items"`);
        await queryRunner.query(`CREATE TABLE "temporary_orders" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "amount" integer NOT NULL, "status_id" integer NOT NULL, "client_id" integer NOT NULL, "address_id" integer NOT NULL, "created_at" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_orders"("id", "amount", "status_id", "client_id", "address_id", "created_at") SELECT "id", "amount", "status_id", "client_id", "address_id", "created_at" FROM "orders"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`ALTER TABLE "temporary_orders" RENAME TO "orders"`);
        await queryRunner.query(`CREATE TABLE "temporary_addresses" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "street_name" varchar NOT NULL, "street_number" varchar NOT NULL, "zipcode" varchar NOT NULL, "city" varchar NOT NULL, "country" varchar NOT NULL, "neighborhood" varchar NOT NULL, "client_id" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_addresses"("id", "street_name", "street_number", "zipcode", "city", "country", "neighborhood", "client_id") SELECT "id", "street_name", "street_number", "zipcode", "city", "country", "neighborhood", "client_id" FROM "addresses"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`ALTER TABLE "temporary_addresses" RENAME TO "addresses"`);
        await queryRunner.query(`CREATE TABLE "temporary_addresses" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "street_name" varchar NOT NULL, "street_number" varchar NOT NULL, "zipcode" varchar NOT NULL, "city" varchar NOT NULL, "country" varchar NOT NULL, "neighborhood" varchar NOT NULL, "client_id" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_addresses"("id", "street_name", "street_number", "zipcode", "city", "country", "neighborhood", "client_id") SELECT "id", "street_name", "street_number", "zipcode", "city", "country", "neighborhood", "client_id" FROM "addresses"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`ALTER TABLE "temporary_addresses" RENAME TO "addresses"`);
        await queryRunner.query(`CREATE TABLE "temporary_products" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "price" integer NOT NULL, "category_id" integer, "stock" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_products"("id", "name", "price", "category_id", "stock") SELECT "id", "name", "price", "category_id", "stock" FROM "products"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`ALTER TABLE "temporary_products" RENAME TO "products"`);
        await queryRunner.query(`CREATE TABLE "temporary_items" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "order_id" integer, "product_id" integer, "quantity" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_items"("id", "order_id", "product_id", "quantity") SELECT "id", "order_id", "product_id", "quantity" FROM "items"`);
        await queryRunner.query(`DROP TABLE "items"`);
        await queryRunner.query(`ALTER TABLE "temporary_items" RENAME TO "items"`);
        await queryRunner.query(`CREATE TABLE "temporary_orders" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "amount" integer NOT NULL, "status_id" integer, "client_id" integer, "address_id" integer, "created_at" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_orders"("id", "amount", "status_id", "client_id", "address_id", "created_at") SELECT "id", "amount", "status_id", "client_id", "address_id", "created_at" FROM "orders"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`ALTER TABLE "temporary_orders" RENAME TO "orders"`);
        await queryRunner.query(`CREATE TABLE "temporary_addresses" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "street_name" varchar NOT NULL, "street_number" varchar NOT NULL, "zipcode" varchar NOT NULL, "city" varchar NOT NULL, "country" varchar NOT NULL, "neighborhood" varchar NOT NULL, "client_id" integer)`);
        await queryRunner.query(`INSERT INTO "temporary_addresses"("id", "street_name", "street_number", "zipcode", "city", "country", "neighborhood", "client_id") SELECT "id", "street_name", "street_number", "zipcode", "city", "country", "neighborhood", "client_id" FROM "addresses"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`ALTER TABLE "temporary_addresses" RENAME TO "addresses"`);
        await queryRunner.query(`CREATE TABLE "temporary_products" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "price" integer NOT NULL, "category_id" integer, "stock" integer NOT NULL, CONSTRAINT "FK_9a5f6868c96e0069e699f33e124" FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_products"("id", "name", "price", "category_id", "stock") SELECT "id", "name", "price", "category_id", "stock" FROM "products"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`ALTER TABLE "temporary_products" RENAME TO "products"`);
        await queryRunner.query(`CREATE TABLE "temporary_items" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "order_id" integer, "product_id" integer, "quantity" integer NOT NULL, CONSTRAINT "FK_f3dcaa16e13ff84a647c6410e15" FOREIGN KEY ("order_id") REFERENCES "orders" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_fb0b5b8bc408db666a8bf407661" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_items"("id", "order_id", "product_id", "quantity") SELECT "id", "order_id", "product_id", "quantity" FROM "items"`);
        await queryRunner.query(`DROP TABLE "items"`);
        await queryRunner.query(`ALTER TABLE "temporary_items" RENAME TO "items"`);
        await queryRunner.query(`CREATE TABLE "temporary_orders" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "amount" integer NOT NULL, "status_id" integer, "client_id" integer, "address_id" integer, "created_at" varchar NOT NULL, CONSTRAINT "FK_03a801095cb90cf148e474cfcb7" FOREIGN KEY ("status_id") REFERENCES "status" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_505ba3689ef2763acd6c4fc93a4" FOREIGN KEY ("client_id") REFERENCES "clients" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_d39c53244703b8534307adcd073" FOREIGN KEY ("address_id") REFERENCES "addresses" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_orders"("id", "amount", "status_id", "client_id", "address_id", "created_at") SELECT "id", "amount", "status_id", "client_id", "address_id", "created_at" FROM "orders"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`ALTER TABLE "temporary_orders" RENAME TO "orders"`);
        await queryRunner.query(`CREATE TABLE "temporary_addresses" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "street_name" varchar NOT NULL, "street_number" varchar NOT NULL, "zipcode" varchar NOT NULL, "city" varchar NOT NULL, "country" varchar NOT NULL, "neighborhood" varchar NOT NULL, "client_id" integer, CONSTRAINT "FK_ef93e5d3f0eb70c0c1983fb462d" FOREIGN KEY ("client_id") REFERENCES "clients" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_addresses"("id", "street_name", "street_number", "zipcode", "city", "country", "neighborhood", "client_id") SELECT "id", "street_name", "street_number", "zipcode", "city", "country", "neighborhood", "client_id" FROM "addresses"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`ALTER TABLE "temporary_addresses" RENAME TO "addresses"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" RENAME TO "temporary_addresses"`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "street_name" varchar NOT NULL, "street_number" varchar NOT NULL, "zipcode" varchar NOT NULL, "city" varchar NOT NULL, "country" varchar NOT NULL, "neighborhood" varchar NOT NULL, "client_id" integer)`);
        await queryRunner.query(`INSERT INTO "addresses"("id", "street_name", "street_number", "zipcode", "city", "country", "neighborhood", "client_id") SELECT "id", "street_name", "street_number", "zipcode", "city", "country", "neighborhood", "client_id" FROM "temporary_addresses"`);
        await queryRunner.query(`DROP TABLE "temporary_addresses"`);
        await queryRunner.query(`ALTER TABLE "orders" RENAME TO "temporary_orders"`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "amount" integer NOT NULL, "status_id" integer, "client_id" integer, "address_id" integer, "created_at" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "orders"("id", "amount", "status_id", "client_id", "address_id", "created_at") SELECT "id", "amount", "status_id", "client_id", "address_id", "created_at" FROM "temporary_orders"`);
        await queryRunner.query(`DROP TABLE "temporary_orders"`);
        await queryRunner.query(`ALTER TABLE "items" RENAME TO "temporary_items"`);
        await queryRunner.query(`CREATE TABLE "items" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "order_id" integer, "product_id" integer, "quantity" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "items"("id", "order_id", "product_id", "quantity") SELECT "id", "order_id", "product_id", "quantity" FROM "temporary_items"`);
        await queryRunner.query(`DROP TABLE "temporary_items"`);
        await queryRunner.query(`ALTER TABLE "products" RENAME TO "temporary_products"`);
        await queryRunner.query(`CREATE TABLE "products" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "price" integer NOT NULL, "category_id" integer, "stock" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "products"("id", "name", "price", "category_id", "stock") SELECT "id", "name", "price", "category_id", "stock" FROM "temporary_products"`);
        await queryRunner.query(`DROP TABLE "temporary_products"`);
        await queryRunner.query(`ALTER TABLE "addresses" RENAME TO "temporary_addresses"`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "street_name" varchar NOT NULL, "street_number" varchar NOT NULL, "zipcode" varchar NOT NULL, "city" varchar NOT NULL, "country" varchar NOT NULL, "neighborhood" varchar NOT NULL, "client_id" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "addresses"("id", "street_name", "street_number", "zipcode", "city", "country", "neighborhood", "client_id") SELECT "id", "street_name", "street_number", "zipcode", "city", "country", "neighborhood", "client_id" FROM "temporary_addresses"`);
        await queryRunner.query(`DROP TABLE "temporary_addresses"`);
        await queryRunner.query(`ALTER TABLE "orders" RENAME TO "temporary_orders"`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "amount" integer NOT NULL, "status_id" integer NOT NULL, "client_id" integer NOT NULL, "address_id" integer NOT NULL, "created_at" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "orders"("id", "amount", "status_id", "client_id", "address_id", "created_at") SELECT "id", "amount", "status_id", "client_id", "address_id", "created_at" FROM "temporary_orders"`);
        await queryRunner.query(`DROP TABLE "temporary_orders"`);
        await queryRunner.query(`ALTER TABLE "items" RENAME TO "temporary_items"`);
        await queryRunner.query(`CREATE TABLE "items" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "order_id" integer NOT NULL, "product_id" integer NOT NULL, "quantity" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "items"("id", "order_id", "product_id", "quantity") SELECT "id", "order_id", "product_id", "quantity" FROM "temporary_items"`);
        await queryRunner.query(`DROP TABLE "temporary_items"`);
        await queryRunner.query(`ALTER TABLE "products" RENAME TO "temporary_products"`);
        await queryRunner.query(`CREATE TABLE "products" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "price" varchar NOT NULL, "category_id" integer NOT NULL, "stock" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "products"("id", "name", "price", "category_id", "stock") SELECT "id", "name", "price", "category_id", "stock" FROM "temporary_products"`);
        await queryRunner.query(`DROP TABLE "temporary_products"`);
        await queryRunner.query(`ALTER TABLE "addresses" RENAME TO "temporary_addresses"`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "street_name" varchar NOT NULL, "street_number" varchar NOT NULL, "zipcode" varchar NOT NULL, "city" varchar NOT NULL, "country" varchar NOT NULL, "neighborhood" varchar NOT NULL, "client_id" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "addresses"("id", "street_name", "street_number", "zipcode", "city", "country", "neighborhood", "client_id") SELECT "id", "street_name", "street_number", "zipcode", "city", "country", "neighborhood", "client_id" FROM "temporary_addresses"`);
        await queryRunner.query(`DROP TABLE "temporary_addresses"`);
        await queryRunner.query(`ALTER TABLE "addresses" RENAME TO "temporary_addresses"`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "street_name" varchar NOT NULL, "street_number" varchar NOT NULL, "zipcode" varchar NOT NULL, "city" varchar NOT NULL, "country" varchar NOT NULL, "neighborhood" varchar NOT NULL, "client_id" integer NOT NULL, CONSTRAINT "FK_ef93e5d3f0eb70c0c1983fb462d" FOREIGN KEY ("client_id") REFERENCES "clients" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`);
        await queryRunner.query(`INSERT INTO "addresses"("id", "street_name", "street_number", "zipcode", "city", "country", "neighborhood", "client_id") SELECT "id", "street_name", "street_number", "zipcode", "city", "country", "neighborhood", "client_id" FROM "temporary_addresses"`);
        await queryRunner.query(`DROP TABLE "temporary_addresses"`);
        await queryRunner.query(`ALTER TABLE "orders" RENAME TO "temporary_orders"`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "amount" integer NOT NULL, "status_id" integer NOT NULL, "client_id" integer NOT NULL, "address_id" integer NOT NULL, "created_at" varchar NOT NULL, CONSTRAINT "FK_d39c53244703b8534307adcd073" FOREIGN KEY ("address_id") REFERENCES "addresses" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_505ba3689ef2763acd6c4fc93a4" FOREIGN KEY ("client_id") REFERENCES "clients" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_03a801095cb90cf148e474cfcb7" FOREIGN KEY ("status_id") REFERENCES "status" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`);
        await queryRunner.query(`INSERT INTO "orders"("id", "amount", "status_id", "client_id", "address_id", "created_at") SELECT "id", "amount", "status_id", "client_id", "address_id", "created_at" FROM "temporary_orders"`);
        await queryRunner.query(`DROP TABLE "temporary_orders"`);
        await queryRunner.query(`ALTER TABLE "items" RENAME TO "temporary_items"`);
        await queryRunner.query(`CREATE TABLE "items" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "order_id" integer NOT NULL, "product_id" integer NOT NULL, "quantity" integer NOT NULL, CONSTRAINT "FK_fb0b5b8bc408db666a8bf407661" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_f3dcaa16e13ff84a647c6410e15" FOREIGN KEY ("order_id") REFERENCES "orders" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`);
        await queryRunner.query(`INSERT INTO "items"("id", "order_id", "product_id", "quantity") SELECT "id", "order_id", "product_id", "quantity" FROM "temporary_items"`);
        await queryRunner.query(`DROP TABLE "temporary_items"`);
        await queryRunner.query(`ALTER TABLE "products" RENAME TO "temporary_products"`);
        await queryRunner.query(`CREATE TABLE "products" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "price" varchar NOT NULL, "category_id" integer NOT NULL, "stock" integer NOT NULL, CONSTRAINT "FK_9a5f6868c96e0069e699f33e124" FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`);
        await queryRunner.query(`INSERT INTO "products"("id", "name", "price", "category_id", "stock") SELECT "id", "name", "price", "category_id", "stock" FROM "temporary_products"`);
        await queryRunner.query(`DROP TABLE "temporary_products"`);
    }

}
