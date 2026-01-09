NativeWind 原子化 CSS 库
> 官网：https://www.nativewind.dev/docs/getting-started/installation

1. 安装依赖

   ```bash
   npx expo add nativewind react-native-reanimated react-native-safe-area-context
   npx expo add tailwindcss@^3.4.17 -- --save-dev
   ```

2. 运行 `npx tailwindcss init` 生成 `tailwind.config.js` 文件，添加配置：

   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     // NOTE: Update this to include the paths to all files that contain Nativewind classes.
     content: ['./App.tsx', './components/**/*.{js,jsx,ts,tsx}'],
     presets: [require('nativewind/preset')],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

3. 创建 `global.css` 文件：

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   ```


注意在全局引入

4. 修改 `babel.config.js` 文件：

   > 如果没有该文件，执行 `npx expo customize babel.config.js` 命令创建。

   ```js
   module.exports = function (api) {
     api.cache(true)
     return {
       presets: [
         ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
         'nativewind/babel',
       ],
     }
   }
   ```

5. 修改 `metro.config.js` 文件：

   > 如果没有该文件，执行 `npx expo customize metro.config.js` 命令创建。

   ```js
   const { getDefaultConfig } = require('expo/metro-config')
   const { withNativeWind } = require('nativewind/metro')

   const config = getDefaultConfig(__dirname)

   module.exports = withNativeWind(config, { input: './global.css' })
   ```

6. 新建 `src/types/nativewind-env.d.ts` 文件：

   ```ts
   /// <reference types="nativewind/types" />
   ```

7. 安装 ` react-native-css-interop` ：

   ```bash
   npx expo install react-native-css-interop
   ```

8. 检验是否生效

   ```tsx
   import { Text, View } from 'react-native'
   import './global.css'

   export default function App() {
     return (
       <View className="flex-1 items-center justify-center bg-white">
         <Text className="text-xl font-bold text-blue-500">
           Welcome to Nativewind!
         </Text>
       </View>
     )
   }
   ```

   如果不生效，记得修改 `tailwind.config.js` 的目标路径：

   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     // NOTE: Update this to include the paths to all files that contain Nativewind classes.
     content: ['./src/app/_layout.tsx', './src/components/**/*.{js,jsx,ts,tsx}'],
     presets: [require('nativewind/preset')],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```
