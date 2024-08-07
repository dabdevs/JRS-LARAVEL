<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">

    <style>
        .kanit-thin {
            font-family: "Kanit", sans-serif;
            font-weight: 100;
            font-style: normal;
        }

        .kanit-extralight {
            font-family: "Kanit", sans-serif;
            font-weight: 200;
            font-style: normal;
        }

        .kanit-light {
            font-family: "Kanit", sans-serif;
            font-weight: 300;
            font-style: normal;
        }

        .kanit-regular {
            font-family: "Kanit", sans-serif;
            font-weight: 400;
            font-style: normal;
        }

        .kanit-medium {
            font-family: "Kanit", sans-serif;
            font-weight: 500;
            font-style: normal;
        }

        .kanit-semibold {
            font-family: "Kanit", sans-serif;
            font-weight: 600;
            font-style: normal;
        }

        table {
            margin-top: 15px;
        }

        b {
            font-family: "Kanit", sans-serif;
            font-weight: 400;
            font-style: normal;
        }

        span {
            font-family: "Kanit", sans-serif;
            font-weight: 200;
            font-style: normal;
        }

        .title {
            text-align: left;
            font-family: "Kanit", sans-serif;
            font-weight: 400;
            font-style: normal;
            font-size: 24px;
            color: grey;
            text-transform: uppercase;
        }

        td {
            padding-right: 30px;
            font-family: "Kanit", sans-serif;
            font-weight: 300;
            font-style: 500;
        }

        .container {
            border-radius: 5px;
            background: white;
            box-shadow: black;
            padding: 2;
        }
    </style>
</head>

<body>
    <div class="container">
        <div>
            <div style="display: flex; justify-content:center; align-items:center">
                <img width="80px" src="https://jrsautocorp.com/img/logo.png"
                    alt="logo" style="margin: 0 auto">
            </div>
            <h1 class="kanit-semibold" style="color:dimgrey">
                {{$application->car->state}} {{$application->car->make}} {{$application->car->model}} {{$application->car->year}}
                <b>${{number_format($application->car->price, 2)}}</b>
            </h1>
        </div>
        <table>
            <thead>
                <th colspan="5" class="title">
                    Personal Information
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <b>Name</b> <br> <span>{{ $application->first_name }} {{ $application->last_name }}</span>
                    </td>
                    <td>
                        <b>Email</b> <br> <span>{{ $application->email }}</span>
                    </td>
                    <td>
                        <b>SSN/ITIN</b> <br> <span>{{ $application->ssn_itin }}</span>
                    </td>
                    <td>
                        <b>Date of birth</b> <br> <span>{{ $application->date_of_birth }}</span>
                    </td>
                    <td>
                        <b>Phone</b> <br> <span>{{ $application->phone }}</span>
                    </td>
                </tr>
            </tbody>
        </table>

        <table>
            <thead>
                <th colspan="5" class="title">
                    Address
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <b>Address Line 1</b> <br> <span>{{ $application->address_line_1 }}</span>
                    </td>
                    <td>
                        <b>Address Line 2</b> <br> <span>{{ $application->address_line_2 ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>Apt Unit</b> <br> <span>{{ $application->apt_unit ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>City</b> <br> <span>{{ $application->city ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>County</b> <br> <span>{{ $application->county ?? 'N/A' }}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>State</b> <br> <span>{{ $application->state ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>Zip Code</b> <br> <span>{{ $application->zip_code ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>Apt Unit</b> <br> <span>{{ $application->apt_unit ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>Time At Current Address</b> <br> <span>{{ $application->time_at_current_address_years }} {{ $application->time_at_current_address_months ?? '' }}</span>
                    </td>
                    <td>
                        <b>Current Residence Type</b> <br> <span>{{ $application->current_residence_type ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>Rent Morgate Payment</b> <br> <span>${{ number_format($application->rent_mortgage_payment, 2) ?? 'N/A' }}</span>
                    </td>
                </tr>
            </tbody>
        </table>

        <table>
            <thead>
                <th colspan="5" class="title">
                    Employment 1
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <b>Employment Type</b> <br> <span>{{ $application->employment1_type ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>Employer</b> <br> <span>{{ $application->employer1_name ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>Job title</b> <br> <span>{{ $application->employment1_rank ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>Phone</b> <br> <span>{{ $application->phone ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>Time At Employment 1</b> <br> <span>{{ $application->time_at_employment1_years }} {{ $application->time_at_employment1_months ?? 'S/A' }}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Address</b> <br> <span>{{ $application->employer1_address ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>City</b> <br> <span>{{ $application->employer1_city ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>State</b> <br> <span>{{ $application->employer1_state ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>Zip Code</b> <br> <span>{{ $application->employer1_zip_code }}</span>
                    </td>
                    <td>
                        <b>Income Type</b> <br> <span>{{ $application->income1_type ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>Monthly Income</b> <br> <span>${{ number_format($application->income1, 2) ?? 'N/A' }}</span>
                    </td>
                </tr>
            </tbody>
        </table>

        <table>
            <thead>
                <th colspan="5" class="title">
                    Employment 2
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <b>Employment Type</b> <br> <span>{{ $application->employment2_type ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>Employer</b> <br> <span>{{ $application->employer2_name ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>Job title</b> <br> <span>{{ $application->employment2_rank ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>Phone</b> <br> <span>{{ $application->phone ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>Time At Employment 1</b> <br> <span>{{ $application->time_at_employment2_years }} {{ $application->time_at_employment2_months ?? 'S/A' }}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Address</b> <br> <span>{{ $application->employer2_address ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>City</b> <br> <span>{{ $application->employer2_city ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>State</b> <br> <span>{{ $application->employer2_state ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>Zip Code</b> <br> <span>{{ $application->employer2_zip_code }}</span>
                    </td>
                    <td>
                        <b>Income Type</b> <br> <span>{{ $application->income2_type ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>Monthly Income</b> <br> <span>${{ number_format($application->income2, 2) ?? 'N/A' }}</span>
                    </td>
                </tr>
            </tbody>
        </table>

        <table>
            <thead>
                <th colspan="5" class="title">
                    Application Information
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <b>Date Created</b> <br> <span>{{ $application->created_at->format('Y-m-d') ?? 'N/A' }}</span>
                    </td>
                    <td>
                        <b>Down Payment</b> <br> <span>${{ number_format($application->down_payment, 2) ?? 'N/A' }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>

</html>
