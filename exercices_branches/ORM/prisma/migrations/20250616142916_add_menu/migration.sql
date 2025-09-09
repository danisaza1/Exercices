-- CreateTable
CREATE TABLE "dishes" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dishes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "menus" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "menus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "menu_dishes" (
    "menu_id" BIGINT NOT NULL,
    "dish_id" BIGINT NOT NULL,

    CONSTRAINT "menu_dishes_pkey" PRIMARY KEY ("menu_id","dish_id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" BIGSERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "address" TEXT,
    "zipcode" VARCHAR(20) NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "commands" (
    "id" BIGSERIAL NOT NULL,
    "user_id" BIGINT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "commands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "command_dishes" (
    "command_id" BIGINT NOT NULL,
    "dish_id" BIGINT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "command_dishes_pkey" PRIMARY KEY ("command_id","dish_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "menu_dishes" ADD CONSTRAINT "menu_dishes_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "menus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_dishes" ADD CONSTRAINT "menu_dishes_dish_id_fkey" FOREIGN KEY ("dish_id") REFERENCES "dishes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commands" ADD CONSTRAINT "commands_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "command_dishes" ADD CONSTRAINT "command_dishes_command_id_fkey" FOREIGN KEY ("command_id") REFERENCES "commands"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "command_dishes" ADD CONSTRAINT "command_dishes_dish_id_fkey" FOREIGN KEY ("dish_id") REFERENCES "dishes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
