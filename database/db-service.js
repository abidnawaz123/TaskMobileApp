import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';

const tableName = 'userCredentials';

enablePromise(true);

export const getDBConnection = async () => {
    return openDatabase({ name: 'todo-data.db', location: 'default' });
};

export const createTable = async (db) => {
    const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
        id INTEGER PRIMARY KEY AUTOINCREMENT,  
        username TEXT NOT NULL,
        email TEXT NOT NULL, 
        password TEXT NOT NULL
    );`;

    await db.executeSql(query);
};

export const getAllUsersCredentials = async (db) => {
    try {
        const todoItems = [];
        const results = await db.executeSql(`SELECT rowid as id,email,password,username FROM ${tableName}`);
        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                todoItems.push(result.rows.item(index))
            }
        });
        return todoItems;
    } catch (error) {
        console.error(error);
        throw Error('Failed to get todoItems !!!');
    }
};

export const saveUserCredentials = async (db, todoItems) => {
    try {
        await db.transaction(async (tx) => {
            for (let i = 0; i < todoItems.length; i++) {
                const items = todoItems[i]
                await tx.executeSql(
                    `INSERT OR REPLACE INTO ${tableName}(username, email, password) VALUES (? ,?, ?);`,
                    [items.username, items.email, items.password]
                )
            }
        })
    } catch (error) {
        console.error(error);
        throw new Error('Failed to save user credentials');
    }
};

export const deleteTodoItem = async (db, id) => {
    const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
    await db.executeSql(deleteQuery);
};

export const deleteTable = async (db) => {
    const query = `drop table ${tableName}`;

    await db.executeSql(query);
};