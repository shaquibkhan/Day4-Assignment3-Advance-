export module module1 {
export namespace Ns1{
	interface vehicle{
		name,
		type
	}
	function f1(){
		console.log(`what is the name of vehicle?`);
	}
	export function f2(){
		console.log(`what is the type of vehicle?`);
	}
}
}