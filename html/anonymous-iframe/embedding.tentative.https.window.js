// META: variant=?1-2
// META: variant=?3-4
// META: variant=?5-6
// META: variant=?7-8
// META: variant=?9-10
// META: variant=?11-12
// META: variant=?13-last
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/common/subset-tests.js
// META: script=/common/dispatcher/dispatcher.js
// META: script=/html/cross-origin-embedder-policy/credentialless/resources/common.js
// META: script=./resources/common.js
// META: script=./resources/embedding-test.js

const {REMOTE_ORIGIN} = get_host_info();

// variant = 1
subsetTest(embeddingTest,
  "Parent embeds same-origin anonymous iframe", {
  expectation: EXPECT_LOAD,
});

// variant = 2
subsetTest(embeddingTest,
  "Parent embeds cross-origin anonymous iframe", {
  child_origin: REMOTE_ORIGIN,
  expectation: EXPECT_LOAD,
});

// variant = 3
subsetTest(embeddingTest,
  "COEP:require-corp parent embeds same-origin anonymous iframe", {
  parent_headers: coep_require_corp,
  expectation: EXPECT_LOAD,
});

// variant = 4
subsetTest(embeddingTest,
  "COEP:require-corp parent embeds cross-origin anonymous iframe", {
  parent_headers: coep_require_corp,
  child_origin: REMOTE_ORIGIN,
  expectation: EXPECT_LOAD,
});

// variant = 5
subsetTest(embeddingTest,
  "COEP:credentialless parent embeds same-origin anonymous iframe", {
  parent_headers: coep_credentialless,
  expectation: EXPECT_LOAD,
});

// variant = 6
subsetTest(embeddingTest,
  "COEP:credentialless parent embeds cross-origin anonymous iframe", {
  parent_headers: coep_credentialless,
  child_origin: REMOTE_ORIGIN,
  expectation: EXPECT_LOAD,
});

// variant = 7
// Regression test for https://crbug.com/1314369
subsetTest(embeddingTest,
  "COOP:same-origin + COEP:require-corp embeds same-origin anonymous iframe", {
  parent_headers: coop_same_origin + coep_require_corp,
  expectation: EXPECT_LOAD,
});

// variant = 8
// Regression test for https://crbug.com/1314369
subsetTest(embeddingTest,
  "COOP:same-origin + COEP:require-corp embeds cross-origin anonymous iframe", {
  parent_headers: coop_same_origin + coep_require_corp,
  child_origin: REMOTE_ORIGIN,
  expectation: EXPECT_LOAD,
});

// variant = 9
// Regression test for https://crbug.com/1314369
subsetTest(embeddingTest,
  "COOP:same-origin + COEP:credentialless embeds same-origin anonymous iframe", {
  parent_headers: coop_same_origin + coep_credentialless,
  expectation: EXPECT_LOAD,
});

// variant = 10
// Regression test for https://crbug.com/1314369
subsetTest(embeddingTest,
  "COOP:same-origin + COEP:credentialless embeds cross-origin anonymous iframe", {
  parent_headers: coop_same_origin + coep_credentialless,
  child_origin: REMOTE_ORIGIN,
  expectation: EXPECT_LOAD,
});

// variant = 11
subsetTest(embeddingTest,
  "Parents embeds a CSP:frame-ancestore anonymous iframe", {
  child_headers: "|headers(Content-Security-Policy,frame-ancestors 'none')",
  expectation: EXPECT_BLOCK,
});

// variant = 12
subsetTest(embeddingTest,
  "Cross-Origin-Isolated parent embeds same-origin COEP anonymous iframe", {
  parent_headers: coop_same_origin + coep_require_corp,
  child_headers: coop_same_origin + coep_require_corp,
  expectation: EXPECT_LOAD,
});

// variant = 13
subsetTest(embeddingTest,
  "Cross-Origin-Isolated parent embeds cross-origin COEP anonymous iframe", {
  parent_headers: coop_same_origin + coep_require_corp,
  child_headers: coop_same_origin + coep_require_corp,
  child_origin: REMOTE_ORIGIN,
  expectation: EXPECT_LOAD,
});
