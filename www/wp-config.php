<?php

define('AUTOSAVE_INTERVAL', 120);
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */
// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'fontas_czqvmp10');
/** Database username */
define('DB_USER', 'fontas_czqvmp10');
/** Database password */
define('DB_PASSWORD', 'gComARgeP27qYK5e');
/** Database hostname */
define('DB_HOST', 'fontas-czqvmp10.db.tb-hosting.com');
/** Database charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');
/** The database collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');
/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'OwWvm;jDuf/`k-cD_fsj&D-?0%t4Q&s~]`,;ii2mk(4ZA7e)6@==W{Bv%j$9M9MR');
define('SECURE_AUTH_KEY', '~d` 4_R*gNb}WR#gC1!N(ND.>jv:*a?W&wTg}DCB:Jo@S6Y@o&ta!J[7W^j{_~rr');
define('LOGGED_IN_KEY', '9::!s1t^hSn|@?S3(>=hYmqawDo^`e ?(%PdQ|eYG.rz}H5zO1{ZB2Si!)YR4P,`');
define('NONCE_KEY', 'GU7OTST5tlRD*EHXE3B_*,gi{dbt^Oz(|jz^_d@qp+nCkBot~Zp?F)q7f%_2=H $');
define('AUTH_SALT', 'w,kh}wNw5V>a{IGuXCrblaqK,..rygP~-<Y&5e?P$9+PuyD-3r|-5Q|/bU+W>#~I');
define('SECURE_AUTH_SALT', 'HG$^i|yd%d[L#ekJO-nk1P|DKZ>)+(Ys.f|97U/5i7F!I4!CsHRV0.XQ/%evX^A%');
define('LOGGED_IN_SALT', 'M$L~UOd#e(#R}.w*H0Fny1M>oc)_axkJ_Au3eubNAn`s`$M`,3;qtW =e$YOWH[W');
define('NONCE_SALT', 'xHcrH,l{17m>0G^82qa*vP 8`{(gZjP3bo%nNqwk:v9Dr8D?{ZRxDaeUeFRgMa~o');
define('WP_CACHE_KEY_SALT', 'ga:d6sS%]8EMmQ_yV<+~eqO#nt#@/}Pm8PJ;E=EX:[uY%z4}Ru~[`nK}mhzqT=_*');
/**#@-*/
/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';
/* Add any custom values between this line and the "stop editing" line. */
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if (!defined('WP_DEBUG')) {
    define('WP_DEBUG', false);
}
$_ENV['iubenda_key'] = '32f53bb729a24409fbb23af188a115560c44f2fe';
/* That's all, stop editing! Happy publishing. */
/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
    define('ABSPATH', __DIR__ . '/');
}
/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';