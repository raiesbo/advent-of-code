use std::fs;

fn main() {
    _ex_1b();
}

fn _ex_1a() {
    let file_path = "./src/1a-data";
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
        result += ((full_number).to_string()).parse::<i32>().unwrap();
    }
    println!("Result: {:?}", result);
}

fn _ex_1b() {
    let file_path = "./src/1b-data";
    let content = fs::read_to_string(file_path).expect("Wrong file path");
    let split_content = content.split("\n");
    let nums = &vec![
        "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    ];
    let mut result = 0;
    for line in split_content {
        let mut first_number: i32 = -1;
        let mut last_number: i32 = -1;
        for (i, c) in line.chars().enumerate() {
            if c.is_numeric() {
                let val = ((c).to_string()).parse::<i32>().unwrap();
                last_number = val;
                if first_number < 0 {
                    first_number = val;
                }
            } else {
                for (j, num) in nums.iter().enumerate() {
                    if line[i..line.len()].starts_with(num) {
                        let value: i32 = (j + 1).try_into().unwrap();
                        last_number = value;
                        if first_number < 0 {
                            first_number = value;
                        }
                        break;
                    }
                }
            }
        }
        result += first_number * 10 + last_number;
    }
    println!("Result: {:?}", result);
}
