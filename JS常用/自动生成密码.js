function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+<>?:{}[]";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

// 使用示例
const passwordLength = 12; // 你想要的密码长度
const newPassword = generatePassword(passwordLength);
console.log("生成的密码: ", newPassword);

// charset 变量包含了所有可能用于生成密码的字符，包括字母（大写和小写）、数字和特殊字符。
// generatePassword 函数接受一个 length 参数，用于指定生成密码的长度。
// 通过循环，函数随机从 charset 中选取字符，直到达到指定的密码长度。
// Math.random() 用于生成随机数，然后通过 Math.floor() 取整，确保索引为整数。
// 你可以调整 charset 中的字符集，或者根据需要增加更多的选项来生成不同复杂度的密码。




const fs = require('fs');

function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+<>?:{}[]";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function savePasswordToFile(password, filePath) {
    const data = {
        password: password,
        timestamp: new Date().toISOString()
    };

    // 检查文件是否存在
    if (fs.existsSync(filePath)) {
        // 读取现有的JSON文件
        const existingData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        existingData.passwords.push(data);
        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
    } else {
        // 如果文件不存在，创建一个新的JSON文件
        const initialData = {
            passwords: [data]
        };
        fs.writeFileSync(filePath, JSON.stringify(initialData, null, 2));
    }

    console.log(`密码已保存到 ${filePath}`);
}

// 使用示例
const passwordLength = 12; // 你想要的密码长度
const newPassword = generatePassword(passwordLength);
console.log("生成的密码: ", newPassword);

// 保存到json文件
const filePath = './passwords.json';
savePasswordToFile(newPassword, filePath);


// 将上述代码保存为 generatePassword.js 文件，然后在终端中运行：

// node generatePassword.js

// generatePassword 函数：生成指定长度的随机密码。
// savePasswordToFile 函数：将生成的密码和生成时间以JSON格式保存到指定的文件中。
// 如果文件已经存在，代码会读取文件，添加新生成的密码数据后再保存。
// 如果文件不存在，代码会创建一个新文件并写入密码数据。
// Node.js的 fs 模块：用于文件系统操作，如读取和写入文件。
// 运行代码后，会在与脚本相同的目录下生成或更新一个名为 passwords.json 的文件，其中记录了生成的密码及其时间戳。








