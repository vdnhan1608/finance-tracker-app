-- Database: finance_tracking
-- author: duy-nhan

-- DROP DATABASE IF EXISTS finance_tracking;

-- CREATE DATABASE finance_tracking
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

DROP TABLE IF EXISTS transactions CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS accounts CASCADE;
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
	id UUID primary key,
	email TEXT UNIQUE NOT NULL,
	name TEXT,
	status VARCHAR(20),
	created_at TIMESTAMP,
	updated_at TIMESTAMP,
	deleted_at TIMESTAMP NULL
);

CREATE TABLE accounts (
	id UUID primary key,
	user_id UUID,
	name TEXT NOT NULL,
	type VARCHAR(20),
	currency CHAR(3) DEFAULT 'VND',
	created_at TIMESTAMP,
	deleted_at TIMESTAMP NULL,

	CONSTRAINT fk_user_id
		FOREIGN KEY (user_id)
		REFERENCES users (id),

	CONSTRAINT uq_user_id_name UNIQUE(user_id, name)
);

CREATE TABLE categories (
	id UUID primary key,
	user_id UUID,
	name TEXT NOT NULL,
	type VARCHAR(10) CHECK (type IN ('income','expense')),

	CONSTRAINT fk_user_id
		FOREIGN KEY (user_id)
		REFERENCES users(id),
	CONSTRAINT uq_user_id_name_type UNIQUE (user_id, name, type)
);


CREATE TABLE transactions (
	id UUID primary key,
	user_id UUID NOT NULL,
	from_account_id UUID NULL,
	to_account_id UUID NULL,
	category_id UUID NULL,
	transaction_type VARCHAR(20) NOT NULL,
	amount NUMERIC(14,2) CHECK (amount > 0),
	note TEXT,
	transaction_date DATE NOT NULL,
	reference_id UUID NULL,
	created_at TIMESTAMP,

	CHECK (
	    from_account_id IS NOT NULL
	    OR to_account_id IS NOT NULL
	)
);