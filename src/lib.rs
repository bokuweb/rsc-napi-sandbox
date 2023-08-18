#[macro_use]
extern crate napi_derive;

#[napi]
pub async fn async_sum(a: i32, b: i32) -> i32 {
  tokio::time::sleep(tokio::time::Duration::from_millis(1000)).await;
  a + b
}
