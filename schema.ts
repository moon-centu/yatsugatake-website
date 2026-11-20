import {sqliteTable,text,integer} from 'drizzle-orm/sqlite-core';
export const bookings=sqliteTable('bookings',{id:text('id').primaryKey(),owner:text('owner').notNull(),guest:text('guest').notNull(),room:text('room').notNull(),activity:text('activity').notNull(),date:text('date').notNull(),time:text('time').notNull(),people:integer('people').notNull(),status:text('status').notNull(),created:text('created').notNull()});
export const facilities=sqliteTable('facilities',{id:text('id').primaryKey(),status:text('status').notNull(),updated:text('updated').notNull()});
export const plans=sqliteTable('plans',{owner:text('owner').primaryKey(),data:text('data').notNull(),updated:text('updated').notNull()});

export const demoSessions=sqliteTable('demo_sessions',{id:text('id').primaryKey(),expires:text('expires').notNull()});
