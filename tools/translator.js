
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const translate = require('translate')
const args = process.argv.slice(2)

// funcs
const getArg = (index, def = undefined) => {
  try {
    if (!args[index] && !def) throw new Error('Argument not found')
    return args[index] || def
  } catch (error) {
    console.error(`Missing argument ${index}`)
    process.exit(1)
  }
}
const getFiles = (dir) => {
  const files = []
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isFile() && file.endsWith('.yml'))
      files.push({
        path: filePath,
        lang: file.replace('.yml', ''),
      })
  })
  return files
}
const translateFile = async (file, locale) => {
  // file is nested object string
  // for each all file object child and translate
  const translatedRes = {}

  const eachCurrLevel = async (obj, parentKey) => {
    for (const key in obj) {
      const value = obj[key]
      const nextParent = parentKey ? `${parentKey}.${key}` : key
      if (typeof value === 'string') {
        translatedRes[`${nextParent}`] = await translate(value, {
          to: locale.lang || 'en',
        })
      } else if (typeof value === 'object') {
        await eachCurrLevel(value, `${nextParent}`)
      }
    }
  }
  await eachCurrLevel(file, '')
