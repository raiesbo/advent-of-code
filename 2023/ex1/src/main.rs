use std::fs;

fn main() {
    let file_path = "./src/data.txt";

    let content = fs::read_to_string(file_path).expect("Wrong file path");

    let split_content = content.split("\n");

    let mut result = 0;

    for line in split_content {
        let mut first_number = '\0';
        let mut last_number = '\0';

        for c in line.chars() {
            if c.is_numeric() {
                last_number = c;
                if first_number == '\0' {
                    first_number = c;
                }
            }
        }

        let full_number = [first_number.to_string(), last_number.to_string()].join("");
        result = result + ((full_number).to_string()).parse::<i32>().unwrap();
    }

    println!("Result: {:?}", result);
}
