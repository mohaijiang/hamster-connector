export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  web3: {
    endpoint: 'https://rinkeby.infura.io/v3/af7a79eb36f64e609b5dda130cd62946',
  },
  database: {
    dialect: process.env.DATABASE_DIALECT || 'mysql',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  apiDoc: {
    version: process.env.API_DOC_VERSION || process.env.npm_package_version,
    title: process.env.API_DOC_TITLE || 'AuthenticRight Toolkit API Document',
    desc: process.env.API_DOC_DESC,
    path: process.env.API_DOC_PATH || 'docs',
  },
  polkadot: {
    endpoint: process.env.POLKADOT_ENDPOINT || 'ws://183.66.65.205:9944',
    distributeIntegralAccount: process.env.POLKADOT_DISTRIBUTE_INTEGRAL_ACCOUNT,
  },
  service: {
    open_platform_url: process.env.SERVICE_OPEN_PLATFORM_URL,
  },
  ipfs: {
    ipfs_url: process.env.IPFS_URL || 'http://127.0.0.1:5001',
    ipfs_path: process.env.IPFS_PATH || '/api/v0',
    ipfs_cache: process.env.IPFS_CACHE || "/tmp",
  },
});
