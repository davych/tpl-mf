const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const CONFIGURATION_DIR = 'openapi-configs'

function getConfigurations() {
	return fs.readdirSync(path.join(__dirname, 'openapi-configs'), 'utf-8')
}

function generateCode(file) {
	execSync(`npx @rtk-query/codegen-openapi ${file}`)
}

function formatCode() {
	execSync('npx prettier --config .prettierrc.js --write src/store/apis/*.ts')
}

function main() {
	try {
		const fileNames = getConfigurations()
		fileNames.forEach((fileName) => {
			const file = path.join(__dirname, CONFIGURATION_DIR, fileName)
			generateCode(file)
		})
		formatCode()
		console.log('rtk-query code generated successfully')
	} catch (err) {
		console.log('rtk-query code generated failed', err)
	}
}

main()
